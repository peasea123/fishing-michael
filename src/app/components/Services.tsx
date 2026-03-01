const services = [
  {
    title: "Full Day Trip",
    duration: "8 Hours",
    description:
      "The ultimate Center Hill Lake experience. A full day on the water gives Michael time to run multiple patterns, hit the best spots, and keep you on fish from sunup. Includes all tackle, bait, and drinks.",
    features: [
      "8 hours of guided fishing",
      "All tackle & gear provided",
      "Fish-finding technology",
      "Drinks & snacks included",
      "Up to 2 guests",
    ],
    icon: SunIcon,
    highlight: true,
  },
  {
    title: "Half Day Trip",
    duration: "4 Hours",
    description:
      "Perfect for families, beginners, or anyone short on time. Four focused hours is plenty to learn the techniques and land some great fish. Morning or afternoon departures available.",
    features: [
      "4 hours of guided fishing",
      "All tackle & gear provided",
      "Great for beginners & kids",
      "Morning or afternoon slot",
      "Up to 2 guests",
    ],
    icon: ClockIcon,
    highlight: false,
  },
  {
    title: "Jet Boat Adventure",
    duration: "Full or Half Day",
    description:
      "Go where no other guide can take you. Michael's jet-powered aluminum boat navigates the shallowest creeks, rivers, and backwaters to reach untouched fishing holes. Explore the Caney Fork, Obey River, and hidden waters.",
    features: [
      "Access ultra-shallow water",
      "River & creek fishing",
      "Explore beyond Center Hill",
      "Jet outboard propulsion",
      "Unique adventure experience",
    ],
    icon: RocketIcon,
    highlight: false,
  },
  {
    title: "Tournament Prep",
    duration: "Custom",
    description:
      "Competing on Center Hill Lake? Michael will share decades of tournament knowledge — seasonal patterns, key areas, and the techniques that win. Custom sessions built around your tournament schedule.",
    features: [
      "Pre-fish strategy sessions",
      "Seasonal pattern breakdown",
      "Structure & electronics training",
      "Custom scheduling",
      "Competition-focused",
    ],
    icon: TrophyIcon,
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
            Every trip is tailored to your experience level and goals. 
            Whether you want a relaxing day or an all-out fishing assault, 
            Michael has you covered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              <p
                className={`mt-1 text-sm font-semibold ${
                  service.highlight ? "text-sunset-400" : "text-sunset-500"
                }`}
              >
                {service.duration}
              </p>
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
      </div>
    </section>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228M18.75 4.236V2.721" />
    </svg>
  );
}
