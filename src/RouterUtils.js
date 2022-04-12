import data from "@src/assets/data.json";

const ProjectData = data.projects_data;

export function getProject(id) {
  return ProjectData.find((Project) => Project.id === id);
}
