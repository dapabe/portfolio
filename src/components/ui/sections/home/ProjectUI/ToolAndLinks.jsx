import { useContext } from "react";
import { ProjectData } from "@context/states";
import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";

const linkStyle = "m-auto transition-[scale] hover:scale-105";

export default function ToolsAndLinks() {
  const { made_with, links } = useContext(ProjectData);
  const t = useTranslations("/.section_projects");
  return (
    <ul className="mb-auto flex justify-between text-center uppercase">
      <li>
        <h2 className="mb-2 text-sm tracking-widest">{t("tools.heading")}</h2>
        <ul className="flex gap-3">
          {made_with.map((tool) => (
            <li key={tool}>
              <Image
                src={`/images/icons/logos/${tool}`}
                width={32}
                height={32}
                className="m-auto"
                alt={tool}
              />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h2 className="mb-2 text-sm tracking-widest">Links</h2>
        <ol className="flex gap-3">
          <li>
            <a
              href={links.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby={t("tools.repo_link")}
              title={t("tools.repo_link")}
            >
              <Image
                src={`/images/icons/social/${
                  "Github-mono.svg" || "Github.svg"
                }`}
                width={32}
                height={32}
                className={linkStyle}
                alt="Github"
              />
            </a>
          </li>
          <li>
            <a
              href={links.webpage}
              target="_blank"
              rel="noopener noreferrer"
              title={t("tools.page_link")}
              aria-labelledby={t("tools.page_link")}
            >
              <LinkIcon className={linkStyle + " h-8 w-8"} />
            </a>
          </li>
        </ol>
      </li>
    </ul>
  );
}
