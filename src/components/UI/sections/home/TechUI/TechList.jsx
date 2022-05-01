export default function TechList({ list }) {
  return (
    <ul className="mx-auto flex max-h-60 max-w-lg flex-wrap justify-center gap-2 font-semibold text-sutilBlack">
      {list.map((name) => (
        <li key={name} className="w-max rounded-md bg-champagnePink p-2">
          {name}
        </li>
      ))}
    </ul>
  );
}
