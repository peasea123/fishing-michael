const testimonials = [
  {
    name: "Jake R.",
    location: "Nashville, TN",
    text: "Mike put us on fish all day long on the Caney Fork. We landed over 30 brown trout — several over 20 inches. His knowledge of the river is second to none, and the photos he took are hanging in my office now.",
    rating: 5,
  },
  {
    name: "Sarah & Tim W.",
    location: "Chattanooga, TN",
    text: "We brought our two kids for a trout float and Mike was incredible with them. Patient, encouraging, and made sure everyone caught fish. The drift boat was comfortable and the scenery was breathtaking. We'll be back every year!",
    rating: 5,
  },
  {
    name: "David M.",
    location: "Lexington, KY",
    text: "The striper trip on the Cumberland was unreal. Mike took us in the jet boat to spots I didn't know existed. Landed my personal best striper on a fly — 28 pounds. The photos Mike took looked like they were straight out of a magazine.",
    rating: 5,
  },
  {
    name: "Chris L.",
    location: "Atlanta, GA",
    text: "I drove 4 hours for a musky trip with Mike and it was worth every mile. His custom-tied flies, his knowledge of the fish, and his patience — the man lives and breathes this stuff. Hooked into my first musky on the fly. Unforgettable.",
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
