import { useParams } from "react-router-dom";
import { getProject } from "../RouterUtils";

export default function ProjectID() {
  const params = useParams();
  const project = getProject(params.projectId);
  console.log(project);
  return (
    <section>
      <h1>Este es el {project.title}</h1>
      <p>{project.description.short || project.description.tech}</p>
      {/* <div>ProjectID {params.projectID}</div> */}
    </section>
  );
}
