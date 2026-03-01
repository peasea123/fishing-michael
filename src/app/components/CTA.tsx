import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 scroll-mt-16 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&fit=crop"
        alt="Lake at golden hour"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-lake-900/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset-400">
            Ready to Fish?
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Book Your Trip Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-lake-200">
            Spots fill up fast, especially during peak season. Get in touch 
            to reserve your date and start planning an unforgettable day on 
            the water.
          </p>
        </div>

        {/* Contact form */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-10 shadow-2xl">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="trip" className="block text-sm font-semibold text-gray-700">
                  Trip Type
                </label>
                <select
                  id="trip"
                  name="trip"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors"
                >
                  <option value="">Select a trip...</option>
                  <option value="full-day">Full Day Trip (8 hrs)</option>
                  <option value="half-day">Half Day Trip (4 hrs)</option>
                  <option value="jet-boat">Jet Boat Adventure</option>
                  <option value="tournament">Tournament Prep</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                Preferred Date(s)
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your group, experience level, or anything else..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-sunset-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sunset-400 hover:shadow-xl hover:scale-[1.02] active:scale-100"
            >
              Send Booking Request
            </button>

            <p className="text-center text-xs text-gray-500">
              We&apos;ll get back to you within 24 hours to confirm availability and details.
            </p>
          </form>
        </div>

        {/* Quick contact options */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lake-800">
              <svg className="h-6 w-6 text-sunset-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-semibold text-white">Call Direct</p>
            <a href="tel:+15551234567" className="mt-1 text-sm text-sunset-400 hover:text-sunset-300 transition-colors">
              (555) 123-FISH
            </a>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lake-800">
              <svg className="h-6 w-6 text-sunset-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-semibold text-white">Email</p>
            <a href="mailto:fish@michaelsguideservice.com" className="mt-1 text-sm text-sunset-400 hover:text-sunset-300 transition-colors">
              fish@michaelsguideservice.com
            </a>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lake-800">
              <svg className="h-6 w-6 text-sunset-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-semibold text-white">Location</p>
            <p className="mt-1 text-sm text-sunset-400">
              Center Hill Lake, Smithville, TN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
