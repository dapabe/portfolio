import { ExternalLinkIcon } from "@heroicons/react/solid";

const ExtLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalLinkIcon className="inline w-5" />
    </a>
  );
};
const AbbrLang = ({ title, children }) => (
  <abbr title={title}>
    <i>{children}</i>
  </abbr>
);

export { ExtLink, AbbrLang };
