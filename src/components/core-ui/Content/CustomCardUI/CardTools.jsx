export default function CardTools({ toolArray }) {
  return (
    <div>
      <h1>Hecho con :</h1>
      <ol>
        {toolArray.map((tool) => (
          <li key={tool}>
            <img src={`/icons/logos/${tool}`} alt={tool} />
          </li>
        ))}
      </ol>
    </div>
  );
}
