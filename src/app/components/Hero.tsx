import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1920&q=80&fit=crop"
        alt="Beautiful sunrise over Center Hill Lake Tennessee"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lake-900/70 via-lake-900/50 to-lake-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sunset-400 sm:text-base">
          Center Hill Lake &bull; Tennessee
        </p>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your Next Trophy Catch
          <span className="block mt-2 text-sunset-400">Starts Here</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-lake-100 sm:text-xl md:text-2xl leading-relaxed">
          Professional fishing guide with decades of experience, 
          state-of-the-art boats, and the local knowledge to put you on the fish — 
          every single trip.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-sunset-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sunset-400 hover:shadow-xl hover:scale-105 active:scale-100 w-full sm:w-auto"
          >
            Book Your Trip
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
          >
            View Trip Options
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-lake-200">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-sunset-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-sunset-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-sunset-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">Premium Equipment</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
