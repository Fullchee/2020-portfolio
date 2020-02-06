import civicTech from "../assets/images/fulls/civic-tech.jpg";
import chineseChess from "../assets/images/fulls/really-bad-chinese-chess.jpg";
import dotFiles from "../assets/images/fulls/dotfiles.jpg";
import carDetail from "../assets/images/fulls/car-detail-exchange.jpg";
import delayDarkEra from "../assets/images/fulls/delay-the-dark-era.jpg";
import dragonBoatCalls from "../assets/images/fulls/dragon-boat-calls.jpg";

export const CURRENT_PROJECTS = [
  {
    id: "1",
    src: civicTech,
    thumbnail: civicTech,
    caption: "Civic Tech Toronto Volunteer",
    description: "Attending weekly hacknights"
  },
  {
    id: "2",
    src: chineseChess,
    thumbnail: chineseChess,
    caption: "Chinese Chess with React!",
    description: "Built with React, React Testing Library, webpack, and SCSS."
  }
];
export const PAST_PROJECTS = [
  [
    {
      id: "1",
      src: dragonBoatCalls,
      thumbnail: dragonBoatCalls,
      caption: "Static Site for learning dragon boat calls",
      description: "Vanilla JS site with descriptions and videos",
      code: "https://github.com/Fullchee/dragon-boat-calls",
      demo: "https://fullchee.github.io/dragon-boat-calls"
    },
    {
      id: "2",
      src: carDetail,
      thumbnail: carDetail,
      caption: "Car Detail Exchange",
      description: "Made with Node.js, Express.js and MySQL",
      demo: "https://hidden-shore-40090.herokuapp.com/"
    },
    {
      id: "3",
      src: dotFiles,
      thumbnail: dotFiles,
      caption: "Dotfiles Repository for Ubuntu",
      description: "zsh, git, npm and other configuration files",
      code: "https://github.com/Fullchee/dotfiles"
    },
    {
      id: "4",
      src: null,
      thumbnail: null,
      caption: "Post Install Scripts",
      description:
        "Scripts and checklists for setting up my dev environments for Linux, Mac and Windows.",
      code: "https://github.com/Fullchee/post-install-scripts"
    },
    {
      id: "5",
      src: null,
      thumbnail: null,
      caption: "Implemented the software of a router",
      description:
        "Used a Linux Virtual Machine to program the router and Built with mininet to support TCP, ICMP and NAT"
    },
    {
      id: "6",
      src: delayDarkEra,
      thumbnail: delayDarkEra,
      caption: "HTML5 Game: Delay the Dark Era",
      description: "HTML5 Game with the mouse",
      code: "https://github.com/Fullchee/delay-the-dark-era",
      demo: "https://fullchee.github.io/delay-the-dark-era/"
    }
  ]
];
