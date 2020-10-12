import chineseChess from "../assets/images/projects/really-bad-chinese-chess.jpg";
import dotFiles from "../assets/images/projects/dotfiles.jpg";
import carDetail from "../assets/images/projects/car-detail-exchange.jpg";
import delayDarkEra from "../assets/images/projects/delay-the-dark-era.jpg";
import dragonBoatCalls from "../assets/images/projects/dragon-boat-calls.jpg";
import calendarShifts from "../assets/images/projects/calendar-shifts.jpg";
import calendarShiftsVideo from "../assets/images/projects/videos/calendar-shifts-video.mp4";
import courseography from "../assets/images/projects/courseography.jpg";
import hongfa from "../assets/images/projects/hongfa.jpg";
import reminders from "../assets/images/projects/reminders.jpg";
import hongfaVideo from "../assets/images/projects/videos/hong-fa-granite-demo.mp4";

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
    alt: "image of hong fa granite.com",
    video: hongfaVideo,
    caption: "Website for Hong Fa Granite",
    description:
      `<ul>
        <li>Static Gatsby site for a local business</li> 
        <li>Site supports both English and Chinese (i18n)</li>
      </ul>`,
    demo: "https://hongfagranite.com",
    tags: ["React", "Front-end"],
  },
  {
    id: "calendar-shifts",
    img: calendarShifts,
    alt: "form for creating batch Google calendar events",
    video: calendarShiftsVideo,
    caption: "Batch Google Calendar events",
    description: "Creates batch google calendar events on arbitrary days",
    repo: "https://github.com/Fullchee/calendar-shifts",
    demo: "https://calendar-shifts.netlify.app/",
    tags: ["React", "Front-end"],
  },
  {
    id: "courseography",
    img: courseography,
    caption: "Courseography",
    description:
      `<ul>
        <li>Improved the maintainability of a React app</li>
        <li>Added integration tests</li>
        <li>added git hooks with husky</li>
      </ul>`,
    repo: "https://github.com/Courseography/courseography",
    demo: "https://courseography.cdf.toronto.edu/",
    tags: ["React", "Front-end"],
  },
  {
    id: "fullchee-images",
    img: reminders,
    repo: "https://github.com/Fullchee/reminders-frontend",
    demo: "https://fullchee-reminders.netlify.app/",
    caption: "Reminders",
    description:
      `<ul><li>Personal platform to record and play meaningful media (videos, podcasts)</li>
      <li>Get a random video/podcast</li>
      </ul>`,
    tags: ["Node.js", "React", "Front-end", "Back-end"],
  },
  {
    id: "dotfiles",
    img: dotFiles,
    caption: "Dotfiles repository",
    description:
      "zsh, git, vim and other configuration files for Ubuntu, Mac and Windows.",
    repo: "https://github.com/Fullchee/dotfiles",
    tags: [],
  },
  {
    id: "dbcalls",
    img: dragonBoatCalls,
    caption: "Static Site for learning dragon boat calls",
    description: "Vanilla JS site with descriptions and videos",
    repo: "https://github.com/Fullchee/dragon-boat-calls",
    demo: "https://fullchee.github.io/dragon-boat-calls",
    tags: ["Front-end"],
  },
  {
    id: "cardetail",
    img: carDetail,
    caption: "Car Detail Exchange",
    description:
      "<ul><li>Platform to connect car detailers and people with cars.</li><li>Made with Node.js, Express.js, MySQL and bootstrap.</li></ul>",
    demo: "https://hidden-shore-40090.herokuapp.com/",
    tags: ["Node.js", "Back-end"],
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
    id: "delaydarkera",
    img: delayDarkEra,
    caption: "HTML5 Canvas Game",
    description:
      `<ul>
        <li>When the level starts, objects move in random directions</li>
        <li>Black holes appear randomly</li>
        <li li>Click on the black holes to get points</li>
        <li>If a black hole collides with a another object, you lose points</li>
      </ul>`,
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
