import { CustomCard } from "@ui/common/exports";

export default function ProjectCards({
  displayedData,
  indexState,
  mouseEvent,
}) {
  return displayedData.map((item, index) => (
    <li
      key={item.title}
      className={`${
        index === indexState ? "activeSlide" : "inactiveSlide"
      } absolute flex h-full w-full items-center justify-center transition-opacity`}
    >
      <CustomCard
        key={item.links[0]}
        image={item.image}
        title={item.title}
        description={item.description.short}
        links={item.links}
        tools={item.made_with}
        onMouseEnter={() => mouseEvent(item.description.short)}
        onMouseLeave={() => mouseEvent(this)}
      />
    </li>
  ));
}
