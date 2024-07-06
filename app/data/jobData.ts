const jobList = [
  {
    id: 1,
    title: "Mid Front End Developer",
    company: ["Bolt"],
    companyLogos: [
      {
        src: "/companies/logo-bolt.png",
        alt: "Bolt Logo",
      },
    ],
    startDate: "2011-11",
    endDate: "2012-10",
    duration: "2 years 4 months",
    description: [
      "Sites and apps development",
      "Facebook apps",
      "Wordpress sites for big clients",
    ],
    skills: ["JavaScript", "PHP", "WordPress"],
    projects: [],
  },
  {
    id: 2,
    title: "Front End Developer",
    company: ["Bhtec - USIMINAS"],
    companyLogos: [
      {
        src: "/companies/logo-bhtec.png",
        alt: "Bhtec Logo",
      },
    ],
    startDate: "2012-10",
    endDate: "2013-03",
    duration: "3 years",
    description: [
      "Develop internal products and features",
      "Design of features and products",
    ],
    skills: ["JavaScript"],
    projects: [],
  },
  {
    id: 3,
    title: "Senior Front End Developer",
    company: ["Innvent", "EloGroup"],
    companyLogos: [
      {
        src: "/companies/logo-innvent.png",
        alt: "Innvent Logo",
      },
      {
        src: "/companies/logo-elogroup.png",
        alt: "EloGroup Logo",
      },
    ],
    startDate: "2013-03",
    endDate: "2014-11",
    duration: "1 year 9 months",
    description: [
      "Products development",
      "Landing pages and hotsites",
      "Clients systems",
    ],
    skills: ["JavaScript", "Node", "Ruby on Rails", "Python", "PHP"],
    projects: [],
  },
  {
    id: 4,
    title: "Senior Front End Developer",
    company: ["Construct LATAM"],
    companyLogos: [
      {
        src: "/companies/logo-construct.png",
        alt: "Construct Logo",
      },
    ],
    startDate: "2014-12",
    endDate: "2016-09",
    duration: "1 year 10 months",
    description: [
      "Platform development in AngularJS and landing page",
      "Platform Design",
      "Product development in React",
    ],
    skills: ["JavaScript", "AngularJS", "React", "Node"],
    projects: [],
  },
  {
    id: 5,
    title: "CTO",
    company: ["Vulpi"],
    companyLogos: [
      {
        src: "/companies/logo-vulpi.png",
        alt: "Vulpi Logo",
      },
    ],
    startDate: "2016-10",
    endDate: "2018-04",
    duration: "1 year 7 months",
    description: [
      "Co-Founder",
      "Management of the development team",
      "Platform development in AngularJS and landing page",
      "Platform Design and management",
      "New platform build with VueJS",
    ],
    skills: ["JavaScript", "AngularJS", "VueJS", "Node", "Django"],
    projects: [],
  },
  {
    id: 6,
    title: "Senior Software Engineer",
    company: ["Gitcoin", "ConsenSys"],
    companyLogos: [
      {
        src: "/companies/logo-gitcoin.png",
        alt: "Gitcoin Logo",
      },
      {
        src: "/companies/logo-consensys.png",
        alt: "Consensys Logo",
      },
    ],
    startDate: "2018-11",
    endDate: "2021-10",
    duration: "3 years",
    description: [
      "Development and features",
      "Introduced VueJS and end up migrating all front end into it together with Django on backend",
    ],
    skills: ["JavaScript", "VueJS", "jQuery", "Django"],
    projects: [
      {
        title: "Old Gitcoin repo",
        link: "https://github.com/gitcoinco/web",
      },
    ],
  },
  {
    id: 7,
    title: "Lead Software Engineer",
    company: ["Windranger Labs", "Mantle"],
    companyLogos: [
      {
        src: "/companies/logo-windranger.png",
        alt: "Windranger Labs Logo",
      },
      {
        src: "/companies/logo-mantle.png",
        alt: "Mantle Logo",
      },
    ],
    startDate: "2021-09-01",
    endDate: "2023-12-01",
    duration: "2 years 4 months",
    description: [
      "Lead of the Front-end team",
      "Develop and maintain many projects",
      "Plan features and products together with other teams",
    ],
    skills: ["JavaScript", "React", "Node", "NextJS"],
    projects: [
      {
        title: "Mantle Delegates",
        link: "https://delegatevote.mantle.xyz/",
      },
      {
        title: "Mantle Landing",
        link: "https://www.mantle.xyz/",
      },
      {
        title: "Bonds",
        link: "https://bonds-app.vercel.app/",
      },
      {
        title: "Treasury Monitor",
        link: "https://treasurymonitor.mantle.xyz/",
      },
    ],
  },
  {
    id: 8,
    title: "Senior Software Engineer",
    company: ["Pump"],
    companyLogos: [
      {
        src: "/companies/logo-pump.png",
        alt: "Pump fun Logo",
      },
    ],
    startDate: "2024-05-07",
    endDate: "Current",
    duration: "",
    description: [
      "Lead Front-end app development",
      "Develop and maintain features and improvements",
    ],
    skills: ["JavaScript", "React", "Node", "NextJS", "Nestjs", "Postgres"],
    projects: [
      {
        title: "Pump Site",
        link: "https://pump.fun",
      },
    ],
  },
];

export interface JobList {
  id: number;
  title: string;
  company?: string[] | null;
  companyLogos?: CompanyLogosEntity[] | null;
  startDate: string;
  endDate: string;
  duration: string;
  description?: string[] | null;
  skills?: string[] | null;
  projects: ProjectsEntity[] | null;
}
export interface CompanyLogosEntity {
  src: string;
  alt: string;
}
export interface ProjectsEntity {
  title: string;
  link: string;
}

export const getCurrentDate = () => {
  const today = new Date();
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);
};

export function calculateTimeDifference(
  startDate: string,
  endDate: string
): string {
  const parseDate = (dateStr: string): Date => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, (month || 1) - 1, day || 1);
  };
  endDate = endDate === "Current" ? getCurrentDate() : endDate;
  let start = parseDate(startDate);
  let end = parseDate(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) {
    return "";
  } else if (years === 0) {
    return `${months} months`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  } else {
    return `${years} ${years === 1 ? "year" : "years"} ${months} ${
      months === 1 ? "month" : "months"
    }`;
  }
}

export default jobList;
