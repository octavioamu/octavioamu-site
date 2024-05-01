import Image from "next/image";
import { Projects } from "../data/projectData";
import Tag from "./Tag";
const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <article className="flex flex-col md:flex-row gap-4 mt-8 items-start">
      <div className="">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer nooopener">
            Visit
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer nooopener">
            Github
          </a>
        )}
        <div className="font-bold">{project.company}</div>
        <p>{project.description}</p>
        <div className="flex gap-1 mt-3 flex-wrap">
          {project.stack?.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </div>
      {project.images?.map((image) => (
        <Image
          key={image}
          src={image}
          width={300}
          height={225}
          alt={project.title}
        />
      ))}
    </article>
  );
};

export default ProjectCard;
