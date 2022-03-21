import data from "../../../assets/data.json";
export default function SocialLinks() {
  return data.social_data.map((link) => (
    <i className="social-icon" key={link.name}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={link.img} alt="a" />
      </a>
    </i>
  ));
}
