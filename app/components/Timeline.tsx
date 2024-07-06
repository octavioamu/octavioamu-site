import Image from "next/image";
import { JobList } from "../data/jobData";
import ShapePath from "./ShapePath";
import TimelineCard from "./TimelineCard";

const Timeline = ({ jobList }: { jobList: JobList[] }) => {
  return (
    <div className="relative">
      <div className="hidden md:block w-1 bg-orange-300 rounded absolute h-full md:left-1/2 transform -translate-x-1/2"></div>

      <div className="flex flex-col gap-16 md:gap-8 md:px-8 pt-8">
        {jobList
          .slice()
          .reverse()
          .map((job) => (
            <div className=" md:w-1/2 md:px-8 md:even:self-end " key={job.id}>
              <div className="absolute z-10 flex -space-x-2 md:left-1/2 -translate-y-10 md:translate-y-full md:-translate-x-1/2">
                <ShapePath className="bg-orange-300 w-full items-center p-4 flex -space-x-2">
                  {job.companyLogos?.map((logo, index) => (
                    <Image
                      className="rounded-full border"
                      src={logo.src}
                      alt={logo.alt}
                      key={index}
                      width={56}
                      height={56}
                      quality={100}
                    />
                  ))}
                </ShapePath>
              </div>
              <ShapePath className="bg-orange-100 w-full items-center p-12  md:ml-0 scroll-tl">
                <TimelineCard
                  className="p-4 flex-shrink-0"
                  key={job.title}
                  job={job}
                />
              </ShapePath>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Timeline;
