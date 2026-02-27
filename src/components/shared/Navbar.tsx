import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-indigo-600/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m6 2a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">
              FixItPro
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/technicians"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Technicians
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-600/50 transition-all duration-300 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
