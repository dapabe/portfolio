import data from "../../../assets/data.json";
export default function SocialLinks() {
  return data.social_data.map((link) => (
    <i className="social-icon" key={link.name}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        title={link.img_desc}
      >
        <img
          src={`/icons/social/${link.img || link.fallback_img}`}
          alt={link.img_desc}
        />
      </a>
    </i>
  ));
}
