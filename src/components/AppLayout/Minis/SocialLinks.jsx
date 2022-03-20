import {
  LinkGithub,
  LinkInstagram,
  LinkLinkedIn,
  LinkTwitter,
} from "../../../assets/icons/exports";
export default function SocialLinks() {
  return (
    <>
      <i className="social-icon">
        <a
          href="https://www.linkedin.com/in/daniel-patricio-becerra-5042681b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkLinkedIn fill="currentColor" />
        </a>
      </i>
      <i className="social-icon">
        <a
          href="https://github.com/dapabe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkGithub fill="currentColor" />
        </a>
      </i>
      <i className="social-icon">
        <a
          href="https://twitter.com/dDenzere1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkTwitter fill="currentColor" />
        </a>
      </i>
      <i className="social-icon">
        <a
          href="https://www.instagram.com/_danzen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkInstagram fill="currentColor" />
        </a>
      </i>
    </>
  );
}
