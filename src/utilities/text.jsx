import { ExternalLinkIcon } from "@heroicons/react/solid";

const ExtLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
    <ExternalLinkIcon className="inline w-4 -translate-y-0.5" />
  </a>
);

const AbbrLang = ({ title, children, ...props }) => (
  <abbr title={title}>
    <i {...props}>{children}</i>
  </abbr>
);

const DfnLink = ({ href, number, children, ...props }) => (
  <a href={href} {...props}>
    {children}
    <sup>{number}</sup>
  </a>
);
export { ExtLink, AbbrLang, DfnLink };
