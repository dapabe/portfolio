import Image from "next/image";
import { arrayRetrieveWithDupe } from "@utils/reusable";
import Carousel from "@ui/reusable/CarouselUI/Carousel";
export default function TechCarousel({ data }) {
  const display_info = arrayRetrieveWithDupe({
    aToLook: data.tech_data,
    aToSearch: data.icons_data,
    kToSearch: "name",
  });
  return (
    <Carousel>
      {display_info.map(({ file, img_desc }, idx) => (
        <Image
          key={idx}
          src={`/images/icons/logos/${file}`}
          alt={img_desc}
          width={160}
          height={80}
        />
      ))}
    </Carousel>
  );
}
