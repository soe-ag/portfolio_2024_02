export const projectCategories = [
  "Professional Works",
  "Personal Projects",
  "Agentic Coding",
];

export const professionalWorks = [
  {
    id: 10,
    slug: "locus",
    category: "Professional Works",
    title: "Locus",
    description:
      "Platform for industry-excursion for high school students in rural areas by MyNavi Corporation.",
    tech: ["React", "Next.js", "TypeScript"],
    image: "/images/full-locus.png",
    link: "https://locus.mynavi.jp/",
    github: "",
    caseStudy: {
      overview: "A platform that connects high school students in rural areas with industry excursions, helping them learn about workplaces and career options.",
      contributions: "Contributed to the platform as part of the development team at MyNavi.",
      decisions: "The platform uses React, Next.js, and TypeScript. Detailed implementation choices are not included in the public project information.",
    },
  },
  {
    id: 1,
    slug: "techful",
    category: "Professional Works",
    title: "TechFUL (discontinued)",
    description:
      "A programming skill assessment coding platform by 444 Inc., featuring over hundreds of unique challenges to enhance skills.",
    tech: ["Vue 3", "Nuxt 3", "TypeScript"],
    image: "/images/part-techful.png",
    link: "https://techful-programming.com/",
    github: "",
    caseStudy: {
      overview: "A programming assessment platform with hundreds of coding challenges designed to help learners practice and measure their programming skills.",
      contributions: "Contributed to the product as part of the development team at 444 Inc.",
      decisions: "The platform uses Vue 3, Nuxt 3, and TypeScript. Detailed implementation choices are not included in the public project information.",
    },
  },
  {
    id: 2,
    slug: "botha-gallery-website",
    category: "Professional Works",
    title: "Botha Gallery Website",
    description:
      "A gallery site for displaying official art. Implements a responsive grid and interactive viewing experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/oldworks/part-botha-gallery (2).png",
    link: "https://lp.bo-tha.com/official_character_gallery/202212/",
    // github: "https://github.com/soe-ag/botha_compe_artlist",
    github: "",
    caseStudy: {
      overview: "A responsive gallery for browsing official character artwork.",
      contributions: "Worked on the gallery interface and its responsive presentation.",
      decisions: "The page uses HTML, CSS, and JavaScript. The source is not publicly linked, so the case study stays at the visible product level.",
    },
  },
  {
    id: 3,
    slug: "botha-official-website",
    category: "Professional Works",
    title: "Botha Official Website",
    description:
      "(Web Replica) A clone of the Botha official website to practice layout structures and modern CSS features.",
    tech: ["HTML", "CSS"],
    image: "/images/oldworks/part-botha (2).png",
    link: "https://soe-ag.github.io/botha_about_clone/",
    github: "https://github.com/soe-ag/botha_about_clone",
    caseStudy: {
      overview: "A practice recreation of the Botha company website, built to study its page structure and visual layout.",
      contributions: "Recreated the page layout and responsive styling as a frontend practice project.",
      decisions: "Used HTML and CSS to focus on layout and styling fundamentals. The original site is linked in the repository README.",
    },
  },
  {
    id: 4,
    slug: "botha-competition-website",
    category: "Professional Works",
    title: "Botha Competition Website",
    description:
      "(Web Replica) Promotional landing page clone for an art competition. Includes scroll animations and responsive design.",
    tech: ["HTML", "CSS"],
    image: "/images/oldworks/part-botha-competition (2).png",
    link: "https://soe-ag.github.io/botha_compete_clone/",
    github: "https://github.com/soe-ag/botha_compete_clone",
    caseStudy: {
      overview: "A practice recreation of a promotional landing page for an art competition.",
      contributions: "Built the page structure, responsive styling, and scroll animations for the recreation.",
      decisions: "Used HTML and CSS to reproduce the visual layout and interaction of the reference page.",
    },
  },
  {
    id: 5,
    slug: "egodiva-marketing-website",
    category: "Professional Works",
    title: "Egodiva Marketing Website",
    description:
      "(Web Replica) A marketing landing page clone with focus on visual aesthetics and scroll-trigger animations.",
    tech: ["HTML", "CSS"],
    image: "/images/oldworks/part-egodia-marketing (2).png",
    link: "https://soe-ag.github.io/egodiva_marketing_clone/",
    github: "https://github.com/soe-ag/egodiva_marketing_clone",
    caseStudy: {
      overview: "A practice recreation of a marketing landing page for a digital marketing agency.",
      contributions: "Recreated the long-form landing page layout and its visual sections as a frontend practice project.",
      decisions: "Used HTML and CSS, focusing on a responsive page structure and visual fidelity to the reference.",
    },
  },
];

export const agenticCoding = [
  // {
  //   id: 1,
  //   category: "Agentic Coding",
  //   title: "LGTM Woof",
  //   description:
  //     "A web application for generating 'LGTM' dog images to spice up your Pull Requests. ",
  //   tech: ["React", "Next.js", "TypeScript", "Convex"],
  //   image: "/images/lgtm-woof.png",
  //   link: "https://lgtm-woof.vercel.app/",
  //   github: "https://github.com/soe-ag/lgtm-woof",
  // },
  {
    id: 1,
    slug: "options-journal",
    category: "Agentic Coding",
    title: "Options Journal",
    description:
      "A web application for recording and analyzing options trading performance.",
    tech: ["React", "Next.js", "TypeScript", "Convex"],
    image: "/images/options-journal.png",
    link: "https://my-options-journal.vercel.app/",
    github: "https://github.com/soe-ag/my-options-journal",
    caseStudy: {
      overview: "A personal journal for investors who sell options, built to record cash-secured puts and covered calls alongside deposits, withdrawals, and trade outcomes. It also summarizes performance by ticker and strategy.",
      contributions: "I built the app solo, using AI-assisted coding to speed up implementation. I shaped the trade-entry and close flows, linked roll workflow, cash ledger, analysis views, and options learning pages.",
      decisions: "Next.js provides the app structure, while Convex Auth and Convex handle user-specific, real-time records. A roll is modeled as closing one short option and opening a linked replacement trade, so realized P/L stays traceable to each leg.",
    },
  },
  {
    id: 2,
    slug: "share-finance",
    category: "Agentic Coding",
    title: "Share Finance",
    description:
      "A mobile-first Progressive Web App (PWA) for splitting group expenses with friends.",
    tech: ["React", "Next.js", "TypeScript", "Convex", "PWA"],
    image: "/images/share-finance.png",
    link: "https://share-finance.vercel.app/",
    github: "https://github.com/soe-ag/share-finance",
    caseStudy: {
      overview: "A mobile-first expense app for friends sharing costs on trips, meals, or temporary living arrangements. It replaces scattered notes with a shared list of expenses, live balances, and a clear settle-up flow.",
      contributions: "I built the product solo with AI-assisted coding. The product idea, target use case, and scope are mine; I implemented group creation, PIN-based joining, expense entry with equal or custom splits, balance views, and repayment confirmation.",
      decisions: "A shared link and PIN keep joining lightweight for casual groups. Convex synchronizes group expenses and repayments in real time, while browser storage remembers local member identity. Settlement suggestions are recalculated from payments and confirmed repayments instead of stored as duplicate data.",
    },
  },
  {
    id: 3,
    slug: "my-finance",
    category: "Agentic Coding",
    title: "My Finance",
    description:
      "A personal finance tracking application to track balances across different accounts, visualize growth, and manage portfolio with ease.",
    tech: ["React", "Next.js", "TypeScript", "Convex", "Tailwind CSS", "Recharts"],
    image: "/images/my-finance.png",
    link: "https://my-finance-woad.vercel.app/",
    github: "https://github.com/soe-ag/my-finance",
    caseStudy: {
      overview: "A personal finance dashboard for recording monthly balances across bank and investment accounts. It turns those snapshots into growth and allocation charts, performance views, goals, and forecast scenarios.",
      contributions: "I built the app solo with AI-assisted coding, shaping the monthly balance-entry workflow and implementing account management, charts, goals, multi-scenario forecasts, currency display, and CSV export.",
      decisions: "The app treats accounts as columns and months as rows, matching the spreadsheet model many people already use for tracking balances. Convex stores normalized, user-scoped data; forecast values are calculated from each user's assumptions and shown as scenarios rather than predictions.",
    },
  },
  {
    id: 5,
    slug: "ecommerce-platform",
    category: "Agentic Coding",
    title: "Ecommerce Platform",
    description:
      "An E-commerce platform features a full storefront, order tracking, and a comprehensive admin dashboard.",
    tech: ["React", "Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    image: "/images/ato-ecommerce.png",
    link: "https://may-mm-prod.vercel.app/",
    github: "https://github.com/soe-ag/ato-may-mm-my-test-ncs-",
    caseStudy: {
      overview: "A full-stack shop for customers to browse and filter products, manage a cart, place orders, and track delivery. It also includes an admin dashboard for catalog, inventory, order, and sales workflows.",
      contributions: "I built the project solo with AI-assisted coding. I implemented storefront search and filtering, cart and wishlist, checkout, order history and tracking, reviews, plus role-protected product and order administration.",
      decisions: "Next.js handles the storefront and admin interfaces; Convex owns persistent commerce data and business rules. Order placement validates and deducts inventory on the server, and prices are stored as integer cents to avoid floating-point money errors.",
    },
  },
  {
    id: 4,
    slug: "repo-monitor",
    category: "Agentic Coding",
    title: "Repo Monitor",
    description:
      "A tool for monitoring packages dependency versions, CI/CD status, and readme updates etc.",
    tech: ["React", "Next.js", "TypeScript", "Convex"],
    image: "/images/repo-monitor.png",
    link: "https://repo-monitor-bice.vercel.app/",
    github: "https://github.com/soe-ag/repo-monitor",
    caseStudy: {
      overview: "A dashboard for developers who want a quick health check across their GitHub repositories. It scans dependencies, README freshness, tests, CI configuration, Dependabot alerts, and recent build or deployment status.",
      contributions: "I built the app solo with AI-assisted coding. I implemented GitHub token connection, scans for one or many repositories, filters and repository detail views, scheduled weekly scans, and a read-only MCP interface for accessing health summaries.",
      decisions: "Next.js provides the dashboard and API routes, while Convex stores scan data and schedules recurring work. GitHub permissions and API availability vary, so unavailable indicators are shown as unknown or absent; failed requests preserve partial results instead of discarding the whole scan.",
    },
  },
];

export const personalProjects = [
  {
    id: 1,
    slug: "movie-db",
    category: "Personal Projects",
    title: "Personalized Movie Database",
    description:
      "Simple movie database designed to track and save watchlist and favorites, tailored to personal preferences.",
    tech: ["Vue 3", "Nuxt 3", "Convex", "UnoCSS", "TMDB API"],
    image: "/images/part-movie.png",
    link: "https://movie-db-beta.netlify.app/",
    github: "",
    caseStudy: {
      overview: "A personal movie and TV database for finding titles and keeping a watch list and favorites.",
      contributions: "Built browsing, search, saved lists, filtering, sorting, and personalized recommendations.",
      decisions: "Nuxt 3 integrates TMDB for title data and Convex for saved lists. Recommendation results are ranked deterministically, with an AI-assisted option for matching titles and explaining recommendations.",
    },
  },
  {
    id: 2,
    slug: "asset-tracker",
    category: "Personal Projects",
    title: "Asset Tracker",
    description:
      "Personalized asset tracking dashboard to monitor favorite assets and customizable charts, designed for simplicity and ease of use.",
    tech: ["Vue 3", "Nuxt 3", "UnoCSS", "Lightweight Charts", "Alpha Vantage"],
    image: "/images/part-asset.png",
    link: "https://asset-tracker-beta.netlify.app/",
    github: "",
    caseStudy: {
      overview: "A personal dashboard for tracking selected stocks and comparing their price trends with charts.",
      contributions: "Built the chart dashboard, asset selection, and comparison views, then iterated on the chart experience.",
      decisions: "Nuxt 3 and Vue power the interface; TradingView Lightweight Charts supports multiple chart styles. To stay within the market data API limit, the app can use bundled sample data and reuses fetched data across chart views.",
    },
  },
  {
    id: 3,
    slug: "old-portfolio-website",
    category: "Personal Projects",
    title: "Old Portfolio Website",
    description:
      "My previous portfolio featuring a clean design focused on presenting works and providing personal information.",
    tech: ["HTML", "SCSS", "JavaScript"],
    image: "/images/oldworks/part-old-port (2).png",
    link: "https://portfolio0223.netlify.app/",
    github: "https://github.com/soe-ag/portfolio_2023feb",
    caseStudy: {
      overview: "An earlier personal portfolio for presenting my work and background.",
      contributions: "Designed and built the portfolio pages and project presentation.",
      decisions: "Used HTML, SCSS, and JavaScript to create a clear structure for presenting project work and profile information.",
    },
  },
];

export const projectItems = [
  ...professionalWorks,
  ...personalProjects,
  ...agenticCoding,
];
