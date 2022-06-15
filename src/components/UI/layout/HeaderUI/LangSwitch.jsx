import { useRouter } from "next/router";
import CustomLink from "@ui/reusable/CustomLink";

const langs = ["es", "en"];

export default function LangSwitch() {
  const router = useRouter();
  console.log(router);
  return (
    // <a title="Language Switcher" className="mr-2 text-lg tracking-wider">
    //   <span>ES</span>/<span>EN</span>
    // </a>
    <select name="Idiomas" id="" className="mr-2 bg-transparent uppercase">
      {langs.map((lang, i) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
