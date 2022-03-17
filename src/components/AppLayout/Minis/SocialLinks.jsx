import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedIn,
  LogoTwitter,
} from "../../../assets/images/exports";
export default function SocialLinks(desktop) {
  const social_anchor = "h-8 w-8 hover:scale-110";
  return (
    <ul className="space-y-3">
      <li className={social_anchor}>
        <a
          href="https://www.linkedin.com/in/daniel-patricio-becerra-5042681b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedIn fill="currentColor" />
        </a>
      </li>
      <li className={social_anchor}>
        <a
          href="https://github.com/dapabe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub fill="currentColor" />
        </a>
      </li>
      <li className={social_anchor}>
        <a
          href="https://twitter.com/dDenzere1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter fill="currentColor" />
        </a>
      </li>
      <li className={social_anchor}>
        <a
          href="https://www.instagram.com/_danzen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoInstagram fill="currentColor" />
        </a>
      </li>
    </ul>
  );
}
