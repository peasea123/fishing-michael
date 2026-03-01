const services = [
  {
    title: "Trout",
    price: "$400",
    duration: "Full Day",
    description:
      "Float the legendary Caney Fork River or Obey River for trophy brown and rainbow trout. Whether you prefer indicator nymphing or pounding the banks with streamers, Mike will put you on the fish. Drinks and snacks included.",
    features: [
      "Caney Fork & Obey River",
      "Brown & rainbow trout",
      "All flies & gear provided",
      "Drift boat or jet boat",
      "Drinks & snacks included",
    ],
    icon: FishIcon,
    highlight: true,
  },
  {
    title: "Striper on the Fly",
    price: "$400",
    duration: "Full Day",
    description:
      "Chase Cumberland River trophy stripers — fish that can top 30 pounds. Mike's custom-tied Striper Slayers and years of experience on these waters give you the best shot at the fish of a lifetime.",
    features: [
      "Cumberland River system",
      "Trophy striped bass",
      "Heavy fly tackle provided",
      "Jet boat access",
      "Drinks & snacks included",
    ],
    icon: BoltIcon,
    highlight: false,
  },
  {
    title: "Musky",
    price: "$400",
    duration: "Full Day",
    description:
      "The fish of 10,000 casts — but not with Mike. Winter and early spring are prime time for Tennessee musky on the Collins River and surrounding waters. This is big-game fly fishing at its most thrilling.",
    features: [
      "Collins River & more",
      "Winter/spring specialty",
      "Heavy streamer fishing",
      "All tackle provided",
      "Drinks & snacks included",
    ],
    icon: TargetIcon,
    highlight: false,
  },
  {
    title: "River Smallmouth",
    price: "$350",
    duration: "Full Day",
    description:
      "Explore Tennessee's incredible smallmouth bass fisheries from spring through fall. Poppers, streamers, and crawfish patterns on rivers that most anglers will never see — accessed by jet boat.",
    features: [
      "Multiple river systems",
      "Spring through fall",
      "Topwater & streamers",
      "Jet boat shallow access",
      "Drinks & snacks included",
    ],
    icon: RocketIcon,
    highlight: false,
  },
  {
    title: "Carp on the Fly",
    price: "$350",
    duration: "Full Day (Summer)",
    description:
      "The closest thing to bonefishing in Middle Tennessee. Sight-fish for big carp on Percy Priest and Old Hickory lakes. Great practice for saltwater flats and an absolute blast on the fly rod.",
    features: [
      "Percy Priest & Old Hickory",
      "Summer only",
      "Sight-fishing on flats",
      "Great saltwater practice",
      "Drinks & snacks included",
    ],
    icon: SunIcon,
    highlight: false,
  },
  {
    title: "Photography Float",
    price: "$300",
    duration: "Full Day",
    description:
      "Not just about fishing — Mike is a nationally published wildlife photographer. Enjoy a scenic float down a beautiful Tennessee river, capturing stunning images of the wildlife and landscapes.",
    features: [
      "Scenic river float",
      "Wildlife & landscape photos",
      "Published photographer guide",
      "Available when conditions allow",
      "Drinks & snacks included",
    ],
    icon: CameraIcon,
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-lake-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
            Trip Options
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
            Choose Your Adventure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Fly fishing in Tennessee is a four-seasons opportunity. From winter
            musky to summer carp, Mike has you covered year-round. Every trip
            includes all gear, flies, and professional photography.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-8 shadow-lg transition-shadow hover:shadow-xl ${
                service.highlight
                  ? "bg-lake-900 text-white ring-2 ring-sunset-400"
                  : "bg-white text-gray-900"
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sunset-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <service.icon
                className={`h-10 w-10 ${
                  service.highlight ? "text-sunset-400" : "text-lake-600"
                }`}
              />

              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span
                  className={`text-2xl font-bold ${
                    service.highlight ? "text-sunset-400" : "text-lake-900"
                  }`}
                >
                  {service.price}
                </span>
                <span
                  className={`text-sm ${
                    service.highlight ? "text-lake-300" : "text-gray-500"
                  }`}
                >
                  / {service.duration}
                </span>
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed flex-1 ${
                  service.highlight ? "text-lake-200" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        service.highlight ? "text-sunset-400" : "text-forest-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={service.highlight ? "text-lake-100" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-100 ${
                  service.highlight
                    ? "bg-sunset-500 text-white hover:bg-sunset-400"
                    : "bg-lake-900 text-white hover:bg-lake-800"
                }`}
              >
                Book This Trip
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          All prices are per trip (guide + up to 2 guests). TN fishing license &amp;
          trout stamp required — purchase at{" "}
          <a href="https://www.tn.gov/twra" target="_blank" rel="noopener noreferrer" className="text-lake-600 underline hover:text-lake-800">
            TWRA
          </a>
          . Meals can be arranged for an additional $20.
        </p>
      </div>
    </section>
  );
}

function FishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 12c-2.5 4-6 6-9.5 6C6 18 3 15 3 12s3-6 8-6c3.5 0 7 2 9.5 6z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  );
}
