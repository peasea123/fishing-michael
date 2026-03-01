import Image from "next/image";

const boats = [
  {
    name: "Supreme 20' Jet Boat",
    subtitle: "The Go-Anywhere Jet Sled",
    image: "/photos/fishing-action-1.jpg",
    description:
      "Mike's flagship — a 20-foot fiberglass jet boat made famous on the White River as the ultimate guide boat. With jet-drive propulsion, this boat runs wide open on water just inches deep, unlocking shallow creeks, skinny rivers, and remote backwater spots that most anglers will never see. Perfect for striper, trout, and smallmouth trips.",
    specs: [
      { label: "Length", value: "20 Feet" },
      { label: "Hull", value: "Fiberglass" },
      { label: "Drive", value: "Jet Outboard" },
      { label: "Draft", value: "Ultra-Shallow" },
    ],
  },
  {
    name: "Blazer 17' Jet Boat",
    subtitle: "Nimble Creek Runner",
    image: "/photos/flickr-river-2.jpg",
    description:
      "A nimble 17-foot jet boat built to navigate the tightest waterways. When the creeks and tributaries get too narrow for the Supreme, the Blazer steps in. Ideal for spring creek adventures and getting to the most secluded fishing holes on the Cumberland Plateau.",
    specs: [
      { label: "Length", value: "17 Feet" },
      { label: "Drive", value: "Jet Propulsion" },
      { label: "Best For", value: "Tight Creeks & Rivers" },
      { label: "Range", value: "Cumberland Plateau & Beyond" },
    ],
  },
  {
    name: "Hyde 16' Drift Boat",
    subtitle: "Classic River Float",
    image: "/photos/fall-casting-scenic.jpg",
    description:
      "The Hyde drift boat is the gold standard for river fly fishing. Purpose-built for floating the Caney Fork and Obey rivers, it gives you the perfect casting platform while Mike rows you through the best trout water in Tennessee. Quiet, stable, and built for all-day comfort.",
    specs: [
      { label: "Length", value: "16 Feet" },
      { label: "Type", value: "Hyde Drift Boat" },
      { label: "Best For", value: "Trout Float Trips" },
      { label: "Rivers", value: "Caney Fork & Obey" },
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
            Three Boats. Any Water.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Mike doesn&apos;t take short cuts on equipment. From drift boats to
            jet sleds, every vessel is a top-notch, industry-proven guide boat
            with a full complement of high-end electronics.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {boats.map((boat, idx) => (
            <div
              key={boat.name}
              className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    className="object-cover"
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
