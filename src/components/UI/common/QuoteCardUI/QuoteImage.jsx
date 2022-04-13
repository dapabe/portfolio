import { useContext } from "react";
import { CustomImage } from "@ui/common/extras";
import { QuoteData } from "./QuoteCard";

export default function QuoteImage() {
  const { nickname, image } = useContext(QuoteData);
  return (
    <div className="hidden min-h-full min-w-[150px] overflow-hidden rounded-full bg-white md:block">
      <CustomImage
        src={`/images/inspirations/${image}`}
        alt={nickname}
        className="my-auto object-cover"
      />
    </div>
  );
}
