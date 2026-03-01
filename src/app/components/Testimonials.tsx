const testimonials = [
  {
    name: "Jake R.",
    location: "Nashville, TN",
    text: "Best fishing trip I've ever been on. Michael put us on fish all day long. We caught over 40 smallmouth in a single trip — several over 4 pounds. His knowledge of Center Hill Lake is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah & Tim W.",
    location: "Chattanooga, TN",
    text: "We brought our two kids (ages 8 and 11) and Michael was incredible with them. Patient, fun, and made sure everyone caught fish. The kids are STILL talking about it. We'll be back every summer!",
    rating: 5,
  },
  {
    name: "David M.",
    location: "Lexington, KY",
    text: "The jet boat trip up the creek was unreal. We fished spots I didn't even know existed. Michael navigated shallow water like it was nothing. Landed my personal best smallmouth that day — 5.2 lbs.",
    rating: 5,
  },
  {
    name: "Chris L.",
    location: "Atlanta, GA",
    text: "As a tournament angler, I hired Michael for pre-fish. His insight on seasonal patterns and structure saved me days of work. Finished 3rd in the event thanks to his guidance. Worth every penny.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
            What Clients Say
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hundreds of happy anglers. Here are a few of their stories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl bg-lake-50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-sunset-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-lake-200 pt-4">
                <p className="font-bold text-lake-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
