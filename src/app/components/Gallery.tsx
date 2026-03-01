import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&fit=crop",
    alt: "Angler holding a trophy largemouth bass on Center Hill Lake",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&q=80&fit=crop",
    alt: "Beautiful sunrise over Center Hill Lake Tennessee",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&q=80&fit=crop",
    alt: "Fishing rods lined up ready for a guided trip",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1440558382541-ff4e12e25e65?w=400&q=80&fit=crop",
    alt: "Calm waters reflecting the sky on the lake at dusk",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?w=400&q=80&fit=crop",
    alt: "Angler casting into golden light",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=600&q=80&fit=crop",
    alt: "Smallmouth bass caught on Center Hill Lake",
    span: "sm:col-span-2",
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
            Scenes from the Lake
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Every trip is a chance to make memories. Here&apos;s a taste of 
            what a day with Michael looks like.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
