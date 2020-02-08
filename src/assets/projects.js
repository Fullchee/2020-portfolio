import chineseChess from "../assets/images/projects/really-bad-chinese-chess.jpg";
import dotFiles from "../assets/images/projects/dotfiles.jpg";
import carDetail from "../assets/images/projects/car-detail-exchange.jpg";
import delayDarkEra from "../assets/images/projects/delay-the-dark-era.jpg";
import dragonBoatCalls from "../assets/images/projects/dragon-boat-calls.jpg";

export const CURRENT_PROJECTS = [
  {
    id: "0",
    img: chineseChess,
    alt: "chinese chess board",
    caption: "Chinese Chess with React!",
    description: "Built with React, React Testing Library, and SCSS.",
    tags: ["Front-end", "React", "JavaScript", "React Testing Library", "SASS"]
  }
];
export const PAST_PROJECTS = [
  {
    id: "calendar-shifts",
    img: null,
    caption: "Batch create Google Calendar events",
    description: "",
    repo: "https://github.com/Fullchee/calendar-shifts",
    demo: "https://calendar-shifts.netlify.com/",
    tags: ["React", "Front-end", "JavaScript", "Cypress", "CSS"]
  },
  {
    id: "fullchee-values",
    img: null,
    repo: "https://github.com/Fullchee/values-client",
    demo: "https://fullchee-values.netlify.com/",
    caption: "Fullchee's values",
    description:
      "Give a random video of something meaningful to remind you of who you want to be",
    tags: [
      "GraphQL",
      "Node.js",
      "Express",
      "React",
      "Front-end",
      "Back-end",
      "JavaScript"
    ]
  },
  {
    id: "courseography",
    img: null,
    caption: "UofT DCS Projects Group Member",
    description: "",
    repo: "https://github.com/Courseography/courseography",
    demo: "https://courseography.cs.toronto.edu/",
    tags: ["JavaScript", "React", "Front-end", "Testing"]
  },
  {
    id: "1",
    img: dragonBoatCalls,
    caption: "Static Site for learning dragon boat calls",
    description: "Vanilla JS site with descriptions and videos",
    repo: "https://github.com/Fullchee/dragon-boat-calls",
    demo: "https://fullchee.github.io/dragon-boat-calls",
    tags: ["JavaScript", "CSS", "Front-end"]
  },
  {
    id: "2",
    img: carDetail,
    caption: "Car Detail Exchange",
    description: "Made with Node.js, Express.js and MySQL",
    demo: "https://hidden-shore-40090.herokuapp.com/",
    tags: ["MySQL", "Node.js", "JavaScript", "Express", "Back-end"]
  },
  {
    id: "3",
    img: dotFiles,
    caption: "Dotfiles Repository for Ubuntu",
    description: "zsh, git, npm and other configuration files",
    repo: "https://github.com/Fullchee/dotfiles",
    tags: ["Unix"]
  },
  {
    id: "4",
    img: null,
    caption: "Post Install Scripts",
    description:
      "Scripts and checklists for setting up my dev environments for Linux, Mac and Windows.",
    repo: "https://github.com/Fullchee/post-install-scripts",
    tags: ["Unix"]
  },
  // {
  //   id: "5",
  //   img: null,
  //   caption: "Implemented the software of a router",
  //   description:
  //     "Used a Linux Virtual Machine to program the router and Built with mininet to support TCP, ICMP and NAT",
  //   tags: ["C", "Networking"]
  // },
  {
    id: "6",
    img: delayDarkEra,
    caption: "HTML5 Game: Delay the Dark Era",
    description: "HTML5 Game with the mouse",
    repo: "https://github.com/Fullchee/delay-the-dark-era",
    demo: "https://fullchee.github.io/delay-the-dark-era/",
    tags: ["JavaScript", "Canvas", "Front-end"]
  }
];

export const ALL_TAGS = [
  ...PAST_PROJECTS.reduce((tags, project) => {
    return new Set([...tags, ...project.tags]);
  }, [])
].sort();
