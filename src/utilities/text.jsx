import { ExternalLinkIcon } from "@heroicons/react/solid";

export const ExtLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
    <ExternalLinkIcon className="inline w-4 -translate-y-0.5" />
  </a>
);

export const AbbrLang = ({ title, children, ...props }) => (
  <abbr title={title}>
    <i {...props}>{children}</i>
  </abbr>
);

export const DfnLink = ({ href, number, children, ...props }) => (
  <a href={href} {...props}>
    {children}
    <sup>{number}</sup>
  </a>
);
