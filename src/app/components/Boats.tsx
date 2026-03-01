import Image from "next/image";

const boats = [
  {
    name: "The Bass Machine",
    subtitle: "Premium Bass Boat",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80&fit=crop",
    description:
      "Michael's flagship is a fully loaded, tournament-ready bass boat equipped with the latest in fish-finding sonar, GPS mapping, and live-scope technology. You'll see what's beneath the surface in real time — and know exactly where to cast.",
    specs: [
      { label: "Electronics", value: "Garmin LiveScope & GPS" },
      { label: "Motor", value: "250 HP Outboard" },
      { label: "Capacity", value: "Guide + 2 Guests" },
      { label: "Features", value: "Trolling Motor, Rod Lockers, Live Wells" },
    ],
  },
  {
    name: "The Creek Runner",
    subtitle: "Aluminum Jet Boat",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80&fit=crop",
    description:
      "This rugged aluminum jet boat is built to go where others can't. With a jet-drive outboard, it skims over just inches of water — unlocking shallow creeks, skinny rivers, and remote backwater fishing spots that most anglers will never see.",
    specs: [
      { label: "Drive", value: "Jet Outboard Propulsion" },
      { label: "Draft", value: "Ultra-Shallow (6 inches)" },
      { label: "Best For", value: "Rivers, Creeks & Backwaters" },
      { label: "Range", value: "Caney Fork, Obey River & More" },
    ],
  },
];

export default function Boats() {
  return (
    <section id="boats" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
            The Fleet
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
            Two Boats. Unlimited Possibilities.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From deep-water bass to shallow creek smallmouth, Michael&apos;s 
            versatile fleet lets him take you wherever the fish are biting.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {boats.map((boat, idx) => (
            <div
              key={boat.name}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block rounded-full bg-lake-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-lake-700">
                  {boat.subtitle}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-lake-900 sm:text-3xl">
                  {boat.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {boat.description}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-4">
                  {boat.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-lg bg-lake-50 p-4"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wider text-lake-600">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-lake-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
