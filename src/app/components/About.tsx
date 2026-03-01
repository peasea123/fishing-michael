import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532015917327-7b73ce58a8a1?w=800&q=80&fit=crop"
                alt="Mike Anderson, Trophy Fishing TN guide, on the water"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-xl bg-lake-900 p-4 sm:p-6 text-white shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold text-sunset-400">30+</p>
              <p className="text-sm text-lake-200">Years on the Water</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
              Meet Your Guide
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
              Mike Anderson
            </h2>
            <p className="mt-1 text-lg font-medium text-lake-600">
              Owner &amp; Head Guide, Trophy Fishing TN
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                Born and raised in Middle Tennessee, Mike started his fishing
                career more than 30 years ago with a Zebco 33 and a Panther
                Martin spinner in a little creek. He grew up learning the area
                fisheries like the back of his hand — from the Caney Fork and
                Cumberland River to the spring creeks of the Cumberland Plateau.
              </p>
              <p>
                Mike is an extremely well-rounded angler and guide. He designs
                and ties all of his own flies — from size 24 midges to 5/0
                Striper Slayers. He builds high-end custom fly rods. And he
                operates a three-boat fleet with a full complement of top-tier
                electronics to put you on fish, every trip.
              </p>
              <p>
                He&apos;s also a nationally published photographer whose images
                have appeared in fly fishing magazines. Every trip with Mike
                includes magazine-quality photos of your catches — a trophy that
                will never tarnish. A lifetime treasure.
              </p>
            </div>

            <blockquote className="mt-6 border-l-4 border-sunset-400 pl-4 italic text-gray-700">
              &ldquo;I eat, sleep, and breathe this stuff. If it swims and will
              take a fly, we&apos;ll catch it! If what we came for isn&apos;t
              cooperating, we&apos;ll find something that is!&rdquo;
              <span className="mt-1 block text-sm font-semibold not-italic text-lake-900">
                — Mike Anderson
              </span>
            </blockquote>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat label="Years Guiding" value="30+" />
              <Stat label="Species Targeted" value="6+" />
              <Stat label="Boats in Fleet" value="3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-lake-900 sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
