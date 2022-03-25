import { CustomCard } from "@ui/Content/exports";

export default function ProjectCards({ displayData, indexState, mouseEvent }) {
  return displayData.map((item, index) => (
    <li
      key={item.title}
      className={`${
        index === indexState ? "activeSlide" : "inactiveSlide"
      } absolute inset-0 mx-auto flex max-w-xs items-center transition-opacity`}
    >
      <div className="h-max min-w-max">
        {
          <CustomCard
            key={item.link}
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
