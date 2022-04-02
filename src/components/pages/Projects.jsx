import { Link, Outlet } from "react-router-dom";
import data from "@src/assets/data.json";
const ProjectData = data.projects_data;

export default function Projects() {
  return (
    <ul className="my-auto flex flex-col items-center">
      {ProjectData.map((Project) => (
        <li key={Project.id}>
          <Link to={`/projects/${Project.id}`}>ir</Link>
        </li>
      ))}
      <Outlet />
    </ul>
  );
}
