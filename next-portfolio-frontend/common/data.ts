import Videozen from "../assets/videozen-compressed.png";

export const timeLineData = {
  experience: [
    {
      date: "September 2021",
      company: "Thoughtworks",
      title: "UI Developer",
      content:
        "Built a system from scratch with authentication, authorization, pagination, history with filters, admin to control all users' access on the systm, user's profile and search where test coverage is > 90% for one of the telecom giants in India.",
    },
    {
      date: "April 2018 - September 2021",
      company: "IBM",
      title: "Application Developer",
      content:
        "Extended the dashboard, history, forms features of the application for 3 or more regions globally. Planned and developed web applications that can be used in multiple devices, resulting in better user experience and accessibility.",
    },
  ],
  education: [
    {
      date: "July 2017",
      title: "B.Tech. in Computer Science & Engineering - 8.65 DGPA",
      content:
        "Completed B.Tech. from West Bengal University of Technology, Kolkata.",
    },
    {
      date: "June 2013",
      title: "12th in Science - 80.8%",
      content:
        "Completed 12th from West Bengal Council of Higher Secondary Education(WBCHSE) board.",
    },
  ],
};

export const featuredProjects = {
  p1: {
    imageLink: Videozen,
    title: "Videozen",
    content:
      "A video library that has some playlists and videos on web technologies. You can use this to learn web development, create custom playlist, add videos to watch later, check history of watched videos, search videos.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://videozen.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Videozen/",
  },
  p2: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Shopwild",
    content:
      "An online shopping app to revolutionize your shopping where you can filter, search items, add items to wishlist, cart and place order.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Jest",
      "React Testing Library",
    ],
    demoLink: "https://shopwild.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/shopwild",
  },
};

export const otherProjects = {
  p3: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Sharedeck",
    content:
      "A Social media application to share your learning, work and experience where you can create posts, follow other people to see their posts, add reacttion to posts.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux-toolkit",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://videozen.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/Videozen/",
  },
  p4: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Quizn",
    content:
      "A quiz app that has some quizzes on web technologies. You can use this to test their knowledge of web development.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://shopwild.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/shopwild",
  },
  p5: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "UI Blocks",
    content:
      "A CSS component library that provides simple, accessible UI components for faster web development. I have used this library to build my other web apps.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://ui-blocks.netlify.app/",
    sourceLink: "https://github.com/sjsouvik/UI-Blocks",
  },
  p6: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Souvik's portfolio",
    content:
      "A portfolio to showcase all his side-projects and blogs at one place with other info.",
    tags: ["HTML", "CSS", "JavaScript", "NextJS"],
    demoLink: "https://souvikjana.vercel.app/",
    sourceLink:
      "https://github.com/sjsouvik/next-portfolio/tree/next-portfolio-frontend",
  },
};

export const cardsData = {
  projects: {
    featured: featuredProjects,
    all: { ...featuredProjects, ...otherProjects },
  },
};

export const skillsData = {
  Languages: ["HTML", "CSS", "Javascript", "TypeScript", "Java"],
  Libraries: ["ReactJS", "Redux-toolkit", "Jest", "React Testing Library"],
  Frameworks: ["NextJS", "NodeJS", "ExpressJS"],
  Languages2: ["Javascript", "Javascript"],
  Languages3: ["Javascript", "Javascript"],
};
