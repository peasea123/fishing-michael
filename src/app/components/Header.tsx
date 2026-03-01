"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#boats", label: "The Boats" },
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
            Michael&apos;s Guide Service
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
          </ul>
        </div>
      )}
    </header>
  );
}

function FishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V5.07c3.95.49 7 3.85 7 7.93 0 1.08-.21 2.11-.6 3.05l-.5.34z" />
    </svg>
  );
}
