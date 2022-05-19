import { arrayRetrieveWithDupe } from "@utils/reusable";
import { Carousel } from "@ui/reusable/exports";
export default function TechCarousel({ data }) {
  const display_info = arrayRetrieveWithDupe({
    aToLook: data.tech_data,
    aToSearch: data.icons_data,
    kToSearch: "name",
  });
  return (
    <Carousel>
      {display_info.map(({ file, img_desc }, idx) => (
        <img
          key={idx}
          src={`/icons/logos/${file}`}
          alt={img_desc}
          loading="lazy"
          className="h-20 w-40"
        />
      ))}
    </Carousel>
  );
}
