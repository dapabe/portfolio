import { Carousel } from "@ui/reusable/exports";

export default function TechCarousel({ list }) {
  return (
    <Carousel>
      {list.map(({ file, img_desc }) => (
        <img
          key={file}
          src={`/icons/logos/${file}`}
          alt={img_desc}
          loading="lazy"
          className="h-20 w-40"
        />
      ))}
    </Carousel>
  );
}
