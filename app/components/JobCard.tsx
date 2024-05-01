import Image from "next/image";
import { JobList } from "../data/jobData";

const JobCard = ({ job, className }: { job: JobList; className?: string }) => {
  // console.log(job);
  return (
    <div className={`${className} mb-8 break-inside-avoid`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex -space-x-2">
          {job.companyLogos?.map((logo, index) => (
            <Image
              className="rounded-full border"
              src={logo.src}
              alt={logo.alt}
              key={index}
              width={32}
              height={32}
              quality={100}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{job.title}</h1>
          <p className="text-xs">{job.company?.join(" / ")}</p>
        </div>
        <p className="ml-auto text-xs italic self-start leading-relaxed">
          {job.startDate} - {job.endDate} - {job.duration}
        </p>
      </div>

      <ul className="list-disc list-inside text-sm">
        {job.description?.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      <div className="flex gap-1 font-bold text-sm mt-2">
        {job.skills?.join(", ")}
        {/* {job.skills?.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))} */}
      </div>
      {job.projects && job.projects?.length > 0 && (
        <div className="mt-2 text-sm">
          <h3>Projects</h3>
          <div className="flex flex-col">
            {job.projects?.map(({ title, link }, index) => (
              <a
                href={link}
                key={index}
                target="_blank"
                rel="noreferrer noopener"
                className="underline text-blue-900"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default JobCard;
