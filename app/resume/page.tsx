import { Metadata } from "next";
// import { Document, Page, StyleSheet } from "@react-pdf/renderer";

// import { pdfjs } from "react-pdf";

import JobCard from "../components/JobCard";
import PrintBtn from "../components/PrintBtn";
import jobList from "../data/jobData";
import "../print.css";
export const metadata: Metadata = {
  title: "Octavio Amuchástegui CV 2024",
};

export default function Resume() {
  return (
    <div className="mt-8 mb-4">
      <div className="text-center mb-4">
        <PrintBtn className="">Download pdf</PrintBtn>
      </div>
      <div className="print-container pb-3">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-8 flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl">Octavio Amuchástegui</h1>
            <div className="flex gap-3 items-center">
              <span className="text-lg">Software Engineer</span>
              <a href="mailto:octavioamuchastegui@gmail.com">
                octavioamuchastegui@gmail.com
              </a>
              <a
                href="https://octavioamu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                octavioamu.com
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col items-end">
          </div> */}
        </div>
        <div className="p-8">
          <p>
            I&apos;m a front-end developer with over a decade of experience,
            always hungry to learn more. I&apos;ve called Argentina, Spain, and
            now Belo Horizonte, Brazil, home. I&apos;ve worked on projects for
            both small businesses and big names.
          </p>
          <p>
            Since 2018, I&apos;ve been diving into web3 companies, exploring the
            cutting edge. I initially studied graphic design to boost the visual
            appeal of my development work.
          </p>
          <p>
            My working permits cover Europe, Brazil, and Argentina, giving me
            flexibility to work across borders.
          </p>
        </div>

        <div className="px-8 mb-8">
          {jobList
            ?.slice()
            .reverse()
            .map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
        </div>
        <div className="px-8 mb-4 text-sm">
          <h2 className="text-lg mb-2 font-bold">Languages</h2>
          <p>English - Spanish - Portuguese</p>
        </div>
        <div className="px-8 mb-4 text-sm">
          <h2 className="text-lg mb-2 font-bold">Education</h2>
          <div className="mb-3">
            <div className="italic">Faculdade Inap</div>
            <div>Graphic Design · (2012 - 2013)</div>
          </div>
          <div className="mb-3">
            <div className="italic">
              Universidad Empresarial &apos;Siglo 21&apos;
            </div>
            <div>Bachelor&apos;s degree in advertising · (2003 - 2003)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
