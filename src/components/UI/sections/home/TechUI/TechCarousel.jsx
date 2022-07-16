import Image from "next/image";
import Carousel from "@shared/carousel/Carousel";
export default function TechCarousel({ data }) {
  return (
    <Carousel>
      {data.map(({ name, file, img_desc }, idx) => (
        <Image
          key={name + idx}
          src={`/images/icons/logos/${file}`}
          alt={img_desc}
          width={160}
          height={80}
        />
      ))}
    </Carousel>
  );
}
