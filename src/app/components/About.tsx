import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532015917327-7b73ce58a8a1?w=800&q=80&fit=crop"
                alt="Experienced fishing guide on the water"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-xl bg-lake-900 p-4 sm:p-6 text-white shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold text-sunset-400">20+</p>
              <p className="text-sm text-lake-200">Years Guiding</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
              Meet Your Guide
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
              Michael Knows Where the Fish Are
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                With over two decades on Center Hill Lake, Michael has an 
                unmatched understanding of every cove, point, bluff, and creek 
                channel where trophy fish hold. His passion for putting clients 
                on fish is what drives every trip.
              </p>
              <p>
                Whether you&apos;re a seasoned angler chasing a personal best or 
                a first-timer looking for an unforgettable day on the water, 
                Michael tailors every outing to your skill level and goals. 
                He provides all the tackle, gear, and local expertise — you just 
                bring your sense of adventure.
              </p>
              <p>
                Center Hill Lake is one of Tennessee&apos;s most stunning and 
                productive fisheries, renowned for its crystal-clear water and 
                incredible smallmouth bass, largemouth bass, walleye, and 
                crappie populations. There&apos;s no better way to experience it 
                than with a guide who has spent a lifetime learning its secrets.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <Stat label="Trips Guided" value="5,000+" />
              <Stat label="Species Targeted" value="6+" />
              <Stat label="Happy Clients" value="100%" />
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
