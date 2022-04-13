import data from "@src/assets/data.json";

const SOCIAL = data.social_data;

export default function SocialLinks({ ...attr }) {
  return SOCIAL.map(({ name, url, img, img_desc, fallback_img }) => (
    <i className="social-icon" key={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={img_desc}
        {...attr}
      >
        <img src={`/icons/social/${img || fallback_img}`} alt={img_desc} />
      </a>
    </i>
  ));
}
