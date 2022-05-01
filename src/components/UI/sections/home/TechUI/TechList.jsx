export default function TechList({ list }) {
  return (
    <ul className="my-container max-h-60">
      {list.map((name) => (
        <li key={name} className="w-max">
          {name}
        </li>
      ))}
    </ul>
  );
}
