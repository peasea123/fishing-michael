export default function Footer() {
  return (
    <footer className="bg-lake-900 border-t border-lake-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
              Michael&apos;s Guide Service
            </p>
            <p className="mt-3 text-sm leading-relaxed text-lake-300">
              Premier fishing guide on Center Hill Lake, Tennessee. 
              Guided trips with world-class boats, tackle, and two decades 
              of local expertise.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#about", label: "About Michael" },
                { href: "#services", label: "Trip Options" },
                { href: "#boats", label: "The Boats" },
                { href: "#gallery", label: "Gallery" },
                { href: "#testimonials", label: "Reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-lake-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fish species */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Target Species
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-lake-300">
              <li>Smallmouth Bass</li>
              <li>Largemouth Bass</li>
              <li>Spotted Bass</li>
              <li>Walleye</li>
              <li>Crappie</li>
              <li>Striped Bass</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-lake-300">
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-FISH
                </a>
              </li>
              <li>
                <a href="mailto:fish@michaelsguideservice.com" className="hover:text-white transition-colors">
                  fish@michaelsguideservice.com
                </a>
              </li>
              <li>Center Hill Lake</li>
              <li>Smithville, TN 37166</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-lake-800 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-lake-400">
            &copy; {new Date().getFullYear()} Michael&apos;s Guide Service. All rights reserved.
          </p>
          <p className="text-xs text-lake-500">
            Center Hill Lake &bull; Smithville, Tennessee
          </p>
        </div>
      </div>
    </footer>
  );
}
