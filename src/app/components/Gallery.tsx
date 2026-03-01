import Image from "next/image";

const photos = [
  {
    src: "/photos/trophy-fish-1.jpg",
    alt: "Trophy catch with Mike Anderson on the Caney Fork",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/photos/flickr-striper-2.jpg",
    alt: "Monster striper caught on the fly — Cumberland River",
    span: "",
  },
  {
    src: "/photos/brown-trout-closeup.jpg",
    alt: "Beautiful Caney Fork brown trout closeup",
    span: "",
  },
  {
    src: "/photos/flickr-striper-5.jpg",
    alt: "Client with a trophy striper on the fly",
    span: "",
  },
  {
    src: "/photos/mike-striper-28inch.jpg",
    alt: "Mike Anderson with a 28-inch striper",
    span: "",
  },
  {
    src: "/photos/spring-creek-falls-2.jpg",
    alt: "Scenic spring creek waterfall on the Cumberland Plateau",
    span: "",
  },
  {
    src: "/photos/flickr-striper-1.jpg",
    alt: "Striper on the fly — the fight is on",
    span: "",
  },
  {
    src: "/photos/striper-catch-1.jpg",
    alt: "Another trophy striper from Tennessee waters",
    span: "sm:col-span-2",
  },
  {
    src: "/photos/client-striper-chad.jpg",
    alt: "Happy client with a big striper catch",
    span: "",
  },
  {
    src: "/photos/flickr-striper-9.jpg",
    alt: "Striper fishing action on the Cumberland River",
    span: "",
  },
  {
    src: "/photos/mike-client-brown-trout.jpg",
    alt: "Mike with a client and a beautiful brown trout",
    span: "",
  },
  {
    src: "/photos/river-scenic-overlook.jpg",
    alt: "Scenic overlook of a Tennessee river valley",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-lake-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset-500">
            On the Water
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-lake-900 sm:text-4xl lg:text-5xl">
            Scenes from the River
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Every trip includes professional photography by Mike — a nationally
            published photographer. Here&apos;s a taste of what a day with
            Trophy Fishing TN looks like.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl aspect-square ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
