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
      } absolute inset-0 mx-auto flex max-w-xs items-center transition-opacity`}
    >
      <div className="inline-block">
        {
          <CustomCard
            key={item.links[0]}
            image={item.image}
            title={item.title}
            description={item.short_desc}
            links={item.links}
            tools={item.made_with}
            onMouseEnter={() => mouseEvent(item.long_desc)}
            onMouseLeave={() => mouseEvent(this)}
          />
        }
      </div>
    </li>
  ));
}
