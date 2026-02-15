import { experienceImageURL, educationImageURL } from "./constants";
import videozen from "../assets/videozen-compressed.png";
import shopwild from "../assets/shopwild.png";
import sharedeck from "../assets/sharedeck.png";
import quizn from "../assets/quizn.png";
import uiBlocks from "../assets/ui-blocks.png";
import portfolio from "../assets/portfolio.png";
import simplePortfolio from "../assets/simple-portfolio.png";
import kanban from "../assets/kanban.png";

export const timeLineData = {
  experience: [
    {
      date: "February 2025",
      company: "Adia Health",
      title: "Senior Engineer III - Frontend",
      content:
        "Building Adia co-pilot which utilizes AI to process patient data, ensuring accurate and thorough diagnostic insights and other web apps to onboard customers such as labs, hospitals, doctors, etc.",
      timelineImageURL: experienceImageURL,
    },
    {
      date: "December 2023 - February 2025",
      company: "ServiceNow",
      title: "Software Engineer II - Frontend",
      content:
        "Part of the Environmental, Social & Governance(ESG) Engineering team where currently building  solutions to make a more sustainable, equitable, and ethical future for the world.",
      timelineImageURL: experienceImageURL,
    },
    {
      date: "September 2021 - November 2023",
      company: "Thoughtworks",
      title: "UI Developer - Senior Consultant",
      content:
        "Built a system from scratch with authentication, authorization, pagination, history with filters, admin module to control all users' access on the system, user's profile and search where test coverage is > 90% for one of the telecom giants in India.",
      timelineImageURL: experienceImageURL,
    },
    {
      date: "April 2018 - September 2021",
      company: "IBM",
      title: "Application Developer",
      content:
        "Extended the dashboard, history, forms features of the application for 3 or more regions globally. Planned and developed web applications that can be used in multiple devices, resulting in better user experience and accessibility.",
      timelineImageURL: experienceImageURL,
    },
  ],
  education: [
    {
      date: "July 2017",
      title: "B.Tech. in Computer Science & Engineering - 8.65 DGPA",
      content:
        "Completed B.Tech. from West Bengal University of Technology, Kolkata.",
      timelineImageURL: educationImageURL,
    },
    {
      date: "June 2013",
      title: "12th in Science - 80.8%",
      content:
        "Completed 12th from West Bengal Council of Higher Secondary Education(WBCHSE) board.",
      timelineImageURL: educationImageURL,
    },
  ],
};

export const featuredProjects = {
  p1: {
    imageLink: shopwild,
    title: "Shopwild",
    content:
      "An online shopping app to revolutionize your shopping where you can filter, search items, add items to wishlist, cart and place order.",
    tags: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Jest",
      "React Testing Library",
      "GitHub Actions",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demoLink: "https://shopwild.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/shopwild",
  },
  p2: {
    imageLink: videozen,
    title: "Videozen",
    content:
      "A video library that has some playlists and videos on web technologies. You can use this to learn web development, create custom playlist, add videos to watch later, check history of watched videos, search videos.",
    tags: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demoLink: "https://videozen.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Videozen/",
  },
};

export const otherProjects = {
  p3: {
    imageLink: sharedeck,
    title: "Sharedeck",
    content:
      "A Social media application to share your learning, work and experience where you can create posts, follow other people to see their posts, add reacttion to posts.",
    tags: [
      "ReactJS",
      "Redux-toolkit",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demoLink: "https://sharedeck.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Sharedeck",
  },
  p4: {
    imageLink: quizn,
    title: "Quizn",
    content:
      "A quiz app that has some quizzes on web technologies. You can use this to test their knowledge of web development.",
    tags: [
      "ReactJS",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demoLink: "https://quizn.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Quizn",
  },
  p5: {
    imageLink: uiBlocks,
    title: "UI Blocks",
    content:
      "A CSS component library that provides simple, accessible UI components for faster web development. I have used this library to build my other web apps.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://ui-blocks.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/UI-Blocks",
  },
  p6: {
    imageLink: simplePortfolio,
    title: "A simple portfolio",
    content:
      "A portfolio website which supports offline access to showcase all side-projects and blogs at one place.",
    tags: ["HTML", "CSS", "JavaScript", "Service Worker"],
    demoLink: "https://sjsouvik.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Portfolio",
  },
  p7: {
    imageLink: kanban,
    title: "Personal Kanban board",
    content:
      "A personal kanban board to track progress of different tasks in hand.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://personalkanbanboard.netlify.app/",
    sourceLink:
      "https://github.com/sjsouvik/JavaScript-Projects/tree/main/Kanban-Board",
  },
  p8: {
    imageLink: portfolio,
    title: "Souvik's Portfolio",
    content:
      "A portfolio to showcase all his side-projects and blogs at one place with other info.",
    tags: [
      "NextJS",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Jest",
      "GitHub Actions",
      "React Testing Library",
      "HTML",
      "CSS",
    ],
    demoLink: "https://souvikjana.vercel.app/",
    sourceLink: "https://github.com/sjsouvik/next-portfolio",
  },
};

export const cardsData = {
  projects: {
    featured: featuredProjects,
    all: { ...featuredProjects, ...otherProjects },
  },
};

export const skillsData = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Java"],
  Libraries: [
    "ReactJS",
    "Redux-toolkit",
    "MobX",
    "i18next",
    "Material UI",
    "Jest",
    "React Testing Library",
    "Mongoose",
  ],
  Frameworks: ["NextJS", "Tailwind CSS", "NodeJS", "ExpressJS"],
  Databases: ["MS Sql Server", "MySQL", "MongoDB"],
  Tools: ["Git & GitHub", "GitHub Actions"],
};
