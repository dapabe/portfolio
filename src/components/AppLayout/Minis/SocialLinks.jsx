import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedIn,
  LogoTwitter,
} from "../../../assets/images/exports";
export default function SocialLinks() {
  return (
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/daniel-patricio-becerra-5042681b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedIn fill="currentColor" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/dapabe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub fill="currentColor" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/dDenzere1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter fill="currentColor" />
        </a>
      </li>
      <li>
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
