import { ExternalLinkIcon } from "@heroicons/react/solid";

//  If the most important tag is not present then render only
//    the content, this is to prevent rendering unnecesary
//    a11y elements for words with that language.

export const ExtLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
    <ExternalLinkIcon className="inline w-4 -translate-y-0.5" />
  </a>
);

export const AbbrLang = ({ children, ...props }) =>
  props.title ? (
    <abbr {...props}>
      <i>{children}</i>
    </abbr>
  ) : (
    children
  );

export const DfnLink = ({ href, number, children, ...props }) => (
  <a href={href} {...props}>
    {children}
    <sup>{number}</sup>
  </a>
);
