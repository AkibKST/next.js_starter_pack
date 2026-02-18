"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Simulated auth state — replace with real auth logic later
const useAuth = () => {
  const [user, setUser] = useState<{
    name: string;
    avatar?: string;
  } | null>(null);

  // Toggle this to test logged-in vs logged-out state:
  // setUser({ name: "John Doe" })
  return { user, setUser };
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hire Technician", href: "/technicians" },
  { label: "Platform Details", href: "/platform-details" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { user, setUser } = useAuth();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll detection for glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = () => setDropdownOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [dropdownOpen]);

  // Demo login for testing — remove in production
  const handleDemoLogin = () => {
    setUser({ name: "John Doe" });
  };

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          {/* ===== LOGO ===== */}
          <Link href="/" className="nav__brand">
            <div className="nav__logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span className="nav__brand-text">FixItPro</span>
          </Link>

          {/* ===== DESKTOP LINKS ===== */}
          <ul className="nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link ${
                    pathname === link.href ? "nav__link--active" : ""
                  }`}
                >
                  {link.label}
                  <span className="nav__link-bar" />
                </Link>
              </li>
            ))}
          </ul>

          {/* ===== RIGHT SIDE ===== */}
          <div className="nav__actions">
            {user ? (
              /* ----- Logged In: User avatar + dropdown ----- */
              <div className="nav__user-wrap">
                <button
                  className="nav__user-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-label="User menu"
                >
                  <div className="nav__avatar">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} />
                    ) : (
                      <span>{user.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="nav__user-name">{user.name}</span>
                  <svg
                    className={`nav__chevron ${
                      dropdownOpen ? "nav__chevron--open" : ""
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="nav__dropdown">
                    <div className="nav__dropdown-header">
                      <div className="nav__avatar nav__avatar--lg">
                        <span>{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="nav__dropdown-name">{user.name}</p>
                        <p className="nav__dropdown-role">Customer</p>
                      </div>
                    </div>
                    <div className="nav__dropdown-divider" />
                    <Link href="/profile" className="nav__dropdown-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      My Profile
                    </Link>
                    <Link href="/bookings" className="nav__dropdown-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      My Bookings
                    </Link>
                    <Link
                      href="/dashboard/customer"
                      className="nav__dropdown-item"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1" />
                        <rect width="7" height="5" x="14" y="3" rx="1" />
                        <rect width="7" height="9" x="14" y="12" rx="1" />
                        <rect width="7" height="5" x="3" y="16" rx="1" />
                      </svg>
                      Dashboard
                    </Link>
                    <Link href="/technicians" className="nav__dropdown-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Hire Technician
                    </Link>
                    <Link
                      href="/profile/settings"
                      className="nav__dropdown-item"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Settings
                    </Link>
                    <div className="nav__dropdown-divider" />
                    <button
                      className="nav__dropdown-item nav__dropdown-item--danger"
                      onClick={handleLogout}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                      </svg>
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ----- Logged Out: Login & Sign Up buttons ----- */
              <div className="nav__auth-btns">
                <Link href="/login" className="nav__btn nav__btn--ghost">
                  Log in
                </Link>
                <Link href="/register" className="nav__btn nav__btn--primary">
                  Sign up
                </Link>
              </div>
            )}

            {/* ===== MOBILE HAMBURGER ===== */}
            <button
              className={`nav__hamburger ${mobileOpen ? "nav__hamburger--open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div className={`nav__mobile ${mobileOpen ? "nav__mobile--open" : ""}`}>
          <ul className="nav__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__mobile-link ${
                    pathname === link.href ? "nav__mobile-link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__mobile-divider" />
          {user ? (
            <div className="nav__mobile-user">
              <div className="nav__mobile-user-info">
                <div className="nav__avatar">
                  <span>{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <span>{user.name}</span>
              </div>
              <Link href="/profile" className="nav__mobile-link">
                My Profile
              </Link>
              <Link href="/bookings" className="nav__mobile-link">
                My Bookings
              </Link>
              <Link href="/dashboard/customer" className="nav__mobile-link">
                Dashboard
              </Link>
              <button className="nav__mobile-logout" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          ) : (
            <div className="nav__mobile-auth">
              <Link
                href="/login"
                className="nav__btn nav__btn--ghost nav__btn--full"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="nav__btn nav__btn--primary nav__btn--full"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind the fixed navbar */}
      <div className="nav__spacer" />
    </>
  );
}
