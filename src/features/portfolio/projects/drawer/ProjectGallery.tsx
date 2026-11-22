import Image from "next/image";

type ProjectGalleryProps = {
  label: string;
  projectTitle: string;
  images?: string[];
};

const GALLERY_IMAGE_SIZES =
  "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw";

export function ProjectGallery({
  label,
  projectTitle,
  images,
}: ProjectGalleryProps) {
  if (!images?.length) return null;

  return (
    <section className="space-y-4">
      <h3 className="text-wide-tracking text-xs text-muted">{label}</h3>

      <ul className="grid gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <li key={src} className="relative aspect-[4/3] bg-neutral-100">
            <Image
              src={src}
              alt={`${projectTitle} (${index + 1}/${images.length})`}
              fill
              sizes={GALLERY_IMAGE_SIZES}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
