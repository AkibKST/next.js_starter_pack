import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Nextjs
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-blue-200 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-200 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition duration-200"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="hover:text-blue-200 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="/counter"
              className="hover:text-blue-200 transition duration-200"
            >
              Counter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
