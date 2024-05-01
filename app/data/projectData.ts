const projects = [
  {
    id: "1",
    link: "https://google.com",
    github: "",
    title: "Multichain Delegation",
    company: "Mantle",
    description:
      "In Mantle we had a challenge to keep track of delegation in ethereum and mantle chain of three tokens BIT, MNT and MNT in L2. We created an UI to handle all scenarios and keep track the total vote power.",
    images: ["/projects/delegates.png"],
    stack: ["nextjs", "wagmi"],
  },
  {
    id: "2",
    link: "https://www.mantle.xyz",
    github: "",
    title: "Mantle Landing data",
    company: "Mantle",
    description:
      "By the complexity of the DAO and the big treasury, transparency is a must.The solution was to create and api to keep track of the different tokens in the ethereum, L2, and LPs agreggating all this data in a good public api.",
    images: ["/projects/mantle-l.png"],
    stack: [
      "Nextjs",
      "React",
      "Tailwind",
      "GraphQL",
      "Viem",
      "Alchemy",
      "directus",
    ],
  },
  {
    id: "3",
    link: "https://bonds-app.vercel.app/pools",
    github: "",
    title: "Bonds",
    company: "Mantle",
    description:
      "By the complexity of the DAO and the big treasury, transparency is a must.The solution was to create and api to keep track of the different tokens in the ethereum, L2, and LPs agreggating all this data in a good public api.",
    images: ["/projects/mantle-l.png"],
    stack: ["nextjs", "wagmi", "graphql"],
  },
  {
    id: "4",
    link: "https://treasurymonitor.mantle.xyz/",
    github: "",
    title: "Treasury monitor",
    company: "Mantle",
    description:
      "By the complexity of the DAO and the big treasury, transparency is a must.The solution was to create and api to keep track of the different tokens in the ethereum, L2, and LPs agreggating all this data in a good public api.",
    images: ["/projects/treasury-monitor.png"],
    stack: [
      "Nextjs",
      "React",
      "Tailwind",
      "MongoDB",
      "Wagmi",
      "Ethers",
      "RainbowKit",
      "NextAuth",
    ],
  },
];

export interface Projects {
  id: string;
  link: string;
  github: string;
  title: string;
  company: string;
  description: string;
  images?: string[] | null;
  stack?: string[] | null;
}

export default projects;
