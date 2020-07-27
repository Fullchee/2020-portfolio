import chineseChess from "../assets/images/projects/really-bad-chinese-chess.jpg";
import dotFiles from "../assets/images/projects/dotfiles.jpg";
import carDetail from "../assets/images/projects/car-detail-exchange.jpg";
import delayDarkEra from "../assets/images/projects/delay-the-dark-era.jpg";
import dragonBoatCalls from "../assets/images/projects/dragon-boat-calls.jpg";
import calendarShifts from "../assets/images/projects/calendar-shifts.jpg";
import valuesImg from "../assets/images/projects/fullchee-values.png";
import courseography from "../assets/images/projects/courseography.jpg";
import hongfa from "../assets/images/projects/hongfa.jpg";
export const CURRENT_PROJECTS = [
  {
    id: "0",
    img: chineseChess,
    alt: "chinese chess board",
    caption: "Chinese Chess with React!",
    description: "Built with React, React Testing Library, and SCSS.",
    tags: ["Front-end", "React", "React Testing Library", "SASS"],
  },
];
export const PAST_PROJECTS = [
  {
    id: "hong-fa-granite",
    img: hongfa,
    caption: "Website for Hong Fa Granite",
    description:
      "Static Gatsby site for a local business. Site supports both English and Chinese. (i18n)",
    demo: "https://hongfagranite.com",
    tags: ["React", "Front-end"],
  },
  {
    id: "calendar-shifts",
    img: calendarShifts,
    caption: "Batch Google Calendar events",
    description: "",
    repo: "https://github.com/Fullchee/calendar-shifts",
    demo: "https://calendar-shifts.netlify.app/",
    tags: ["React", "Front-end"],
  },
  {
    id: "fullchee-values",
    img: valuesImg,
    repo: "https://github.com/Fullchee/values-client",
    demo: "https://fullchee-values.netlify.app/",
    caption: "Fullchee's values",
    description:
      "Give a random video of something meaningful to remind you of who you want to be",
    tags: ["Node.js", "React", "Front-end", "Back-end"],
  },
  {
    id: "courseography",
    img: courseography,
    caption: "Courseography",
    description:
      "Improved the maintainability of a React app for future volunteers\n added integration tests \n added git hooks with husky",
    repo: "https://github.com/Courseography/courseography",
    demo: "https://courseography.cdf.toronto.edu/",
    tags: ["React", "Front-end"],
  },
  {
    id: "1",
    img: dragonBoatCalls,
    caption: "Static Site for learning dragon boat calls",
    description: "Vanilla JS site with descriptions and videos",
    repo: "https://github.com/Fullchee/dragon-boat-calls",
    demo: "https://fullchee.github.io/dragon-boat-calls",
    tags: ["Front-end"],
  },
  {
    id: "2",
    img: carDetail,
    caption: "Car Detail Exchange",
    description:
      "Platform to connect car detailers and people with cars. Made with Node.js, Express.js,  MySQL and bootstrap.",
    demo: "https://hidden-shore-40090.herokuapp.com/",
    tags: ["Node.js", "Back-end"],
  },
  {
    id: "3",
    img: dotFiles,
    caption: "Dotfiles repository",
    description: "zsh, git, vim and other configuration files for Ubuntu, Mac and Windows.",
    repo: "https://github.com/Fullchee/dotfiles",
    tags: [],
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
    caption: "HTML5 Canvas Game",
    description:
      "Delay the dark era: click the black holes before they swallow up the universe!",
    repo: "https://github.com/Fullchee/delay-the-dark-era",
    demo: "https://fullchee.github.io/delay-the-dark-era/",
    tags: ["Front-end"],
  },
];

export const ALL_TAGS = [
  ...PAST_PROJECTS.reduce((tags, project) => {
    return new Set([...tags, ...project.tags]);
  }, []),
].sort();
