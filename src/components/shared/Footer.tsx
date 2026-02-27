import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-indigo-600/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
              <h3 className="text-xl font-bold text-white">FixItPro</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted platform for finding professional home services and
              expert technicians.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Browse Services
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/technicians"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Find Technicians
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} FixItPro. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-indigo-600 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.146-4.365-.146-4.814 0-8.333 2.939-8.333 8.349v2.404z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-indigo-600 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
