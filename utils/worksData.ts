export const projectCategories = [
  "Professional Works",
  "Personal Projects",
  "Vibe Coding",
];

export const professionalWorks = [
  {
    id: 1,
    category: "Professional Works",
    title: "TechFUL (discontinued)",
    description:
      "A programming skill assessment coding platform by 444 Inc., featuring over hundreds of unique challenges to enhance development skills.",
    tech: ["Vue 3", "Nuxt 3", "TypeScript"],
    image: "/images/part-techful.png",
    link: "https://techful-programming.com/",
    github: "",
  },
  {
    id: 2,
    category: "Professional Works",
    title: "Botha Gallery Website",
    description:
      "A gallery site for displaying official art. Implements a responsive grid and interactive viewing experience.",
    tech: ["Nuxt", "TailwindCSS"],
    image: "/images/oldworks/part-botha-gallery (2).png",
    link: "https://lp.bo-tha.com/official_character_gallery/202212/",
    github: "https://github.com/soe-ag/botha_compe_artlist",
  },
  {
    id: 3,
    category: "Professional Works",
    title: "Botha Official Website",
    description:
      "(Web Replica) A clone of the Botha official website to practice layout structures and modern CSS features.",
    tech: ["HTML", "SCSS", "JavaScript"],
    image: "/images/oldworks/part-botha (2).png",
    link: "https://soe-ag.github.io/botha_about_clone/",
    github: "https://github.com/soe-ag/botha_about_clone",
  },
  {
    id: 4,
    category: "Professional Works",
    title: "Botha Competition Website",
    description:
      "(Web Replica) Promotional landing page clone for an art competition. Includes scroll animations and responsive design.",
    tech: ["Nuxt", "TailwindCSS"],
    image: "/images/oldworks/part-botha-competition (2).png",
    link: "https://soe-ag.github.io/botha_compete_clone/",
    github: "https://github.com/soe-ag/botha_compete_clone",
  },
  {
    id: 5,
    category: "Professional Works",
    title: "Egodiva Marketing Website",
    description:
      "(Web Replica) A marketing landing page clone with focus on visual aesthetics and scroll-trigger animations.",
    tech: ["Vue 3", "Vite", "TailwindCSS"],
    image: "/images/oldworks/part-egodia-marketing (2).png",
    link: "https://soe-ag.github.io/egodiva_marketing_clone/",
    github: "https://github.com/soe-ag/egodiva_marketing_clone",
  },
];

export const vibeCoding = [];

export const personalProjects = [
  {
    id: 1,
    category: "Personal Projects",
    title: "Personalized Movie Database",
    description:
      "Simple movie database designed to track and save watchlist and favorites, tailored to personal preferences.",
    tech: ["Nuxt 3", "TailwindCSS"],
    image: "/images/part-movie.png",
    link: "/works/movie-db",
    github: "",
  },
  {
    id: 2,
    category: "Personal Projects",
    title: "Asset Tracker",
    description:
      "Personalized asset tracking dashboard to monitor favorite assets and customizable charts, designed for simplicity and ease of use.",
    tech: ["Nuxt 3", "TailwindCSS"],
    image: "/images/part-asset.png",
    link: "/works/asset-tracker",
    github: "",
  },
  {
    id: 3,
    category: "Personal Projects",
    title: "Old Portfolio Website",
    description:
      "My previous portfolio featuring a clean design focused on presenting works and providing personal information.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/oldworks/part-old-port (2).png",
    link: "https://portfolio0223.netlify.app/",
    github: "https://github.com/soe-ag/portfolio_2023feb",
  },
];

export const projectItems = [
  ...professionalWorks,
  ...personalProjects,
  ...vibeCoding,
];
