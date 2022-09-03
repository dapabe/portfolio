import { useRouter } from "next/router";
import Image from "next/image";
import social_icons from "@src/assets/static/social.json";

export default function SocialLinks({ ...props }) {
  const { locale } = useRouter();

  return social_icons.map(({ name, url, img, img_desc, fallback_img }) => (
    <i className="h-8 w-8 transition-transform hover:scale-110" key={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={img_desc[locale]}
        {...props}
      >
        <Image
          src={`/images/icons/social/${img || fallback_img}`}
          alt={img_desc[locale]}
          width={32}
          height={32}
        />
      </a>
    </i>
  ));
}
