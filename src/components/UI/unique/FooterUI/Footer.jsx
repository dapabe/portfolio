import data from "@src/assets/data.json";
const social = data.social_data;
export default function Footer() {
  return (
    <footer className="bg-sutilBlack pb-10">
      <ul className="my-container mx-auto flex flex-col justify-around gap-y-5 border-t-2 border-slate-700 pt-10 text-center sm:flex-row">
        {social.map(({ name, url }) => (
          <li key={name} className="btn-inOut after:bg-white">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
