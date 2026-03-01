export default function Footer() {
  return (
    <footer className="bg-lake-900 border-t border-lake-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
              Trophy Fishing TN
            </p>
            <p className="mt-3 text-sm leading-relaxed text-lake-300">
              Premier fly fishing guide service in Middle Tennessee.
              Over 30 years of experience on the Caney Fork, Cumberland
              River, and beyond. Guided trips with world-class boats,
              custom flies, and magazine-quality photography.
            </p>
            <a
              href="tel:6156179032"
              className="mt-4 inline-block text-sm font-bold text-sunset-400 hover:text-sunset-300 transition-colors"
            >
              615-617-9032
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#about", label: "About Mike" },
                { href: "#services", label: "Trip Options & Rates" },
                { href: "#boats", label: "The Fleet" },
                { href: "#gallery", label: "Gallery" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#contact", label: "Book a Trip" },
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Waters We Fish
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-lake-300">
              <li>Caney Fork River</li>
              <li>Cumberland River</li>
              <li>Obey River</li>
              <li>Collins River</li>
              <li>Center Hill Lake</li>
              <li>Percy Priest Lake</li>
              <li>Old Hickory Lake</li>
              <li>Cumberland Plateau Creeks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lake-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-lake-300">
              <li>
                <a href="tel:6156179032" className="hover:text-white transition-colors">
                  615-617-9032
                </a>
              </li>
              <li>
                <a href="mailto:mike@trophyfishingtn.com" className="hover:text-white transition-colors">
                  mike@trophyfishingtn.com
                </a>
              </li>
              <li>4500 Coconut Ridge Rd</li>
              <li>Smithville, TN 37166</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-lake-400">
              Target Species
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-lake-300">
              <li>Brown &amp; Rainbow Trout</li>
              <li>Striped Bass</li>
              <li>Musky</li>
              <li>Smallmouth Bass</li>
              <li>Carp</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-lake-800 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-lake-400">
            &copy; {new Date().getFullYear()} Trophy Fishing TN. All rights reserved.
          </p>
          <p className="text-xs text-lake-500">
            Mike Anderson &bull; Smithville, Tennessee &bull; 615-617-9032
          </p>
        </div>
      </div>
    </footer>
  );
}
