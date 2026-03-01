"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About Mike" },
  { href: "#services", label: "Trip Options" },
  { href: "#boats", label: "The Fleet" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Book Now" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lake-900/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <FishIcon className="h-8 w-8 text-sunset-400" />
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white tracking-tight">
            Trophy Fishing TN
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.href === "#contact"
                    ? "bg-sunset-500 text-white hover:bg-sunset-400"
                    : "text-lake-100 hover:text-white hover:bg-lake-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:6156179032"
              className="ml-2 px-3 py-2 text-sm font-medium text-sunset-400 hover:text-sunset-300 transition-colors"
            >
              615-617-9032
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-lake-900/98 border-t border-lake-700">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    link.href === "#contact"
                      ? "bg-sunset-500 text-white text-center hover:bg-sunset-400"
                      : "text-lake-100 hover:text-white hover:bg-lake-800"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:6156179032"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-bold text-sunset-400 text-center"
              >
                Call: 615-617-9032
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function FishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 12c-2.5 4-6 6-9.5 6C6 18 3 15 3 12s3-6 8-6c3.5 0 7 2 9.5 6z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 9l-1.5 3L21 15" />
    </svg>
  );
}
