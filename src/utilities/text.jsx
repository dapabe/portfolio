import { ExternalLinkIcon } from "@heroicons/react/solid";

const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <ExternalLinkIcon className="inline w-4" />
  </a>
);

const AbbrLang = ({ title, children }) => (
  <abbr title={title}>
    <i>{children}</i>
  </abbr>
);

const DfnLink = ({ href, number, children }) => (
  <a href={href}>
    {children}
    <sup>{number}</sup>
  </a>
);
export { ExtLink, AbbrLang, DfnLink };
