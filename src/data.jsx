import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/projecto-1.jpg";
import Work2 from "./assets/projecto-2.jpg";
import Work3 from "./assets/projecto-3.jpg";
import Work4 from "./assets/projecto-4.jpg";
import Work5 from "./assets/projecto-5.jpg";
/* import Work6 from "./assets/project-6.jpg"; */

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name: ",
    description: "João",
  },

  {
    id: 2,
    title: "Last Name: ",
    description: "Cravidão",
  },

  {
    id: 3,
    title: "Age: ",
    description: "38 Years",
  },

  {
    id: 4,
    title: "Nationality: ",
    description: "Portuguese",
  },

  {
    id: 5,
    title: "Freelance: ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address: ",
    description: "Montijo",
  },

  {
    id: 7,
    title: "Phone: ",
    description: "+351910776709",
  },

  {
    id: 8,
    title: "Email: ",
    description: "joao_kravidao@hotmail.com",
  },

  {
    id: 9,
    title: "Hobbies: ",
    description: "Coding",
  },

  {
    id: 10,
    title: "Languages: ",
    description: "Portuguese, English, Spanish, French",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "12",
    title: "Skills <br /> Learned",
  },

  {
    id: 4,
    no: "2000+",
    title: " Hours of <br /> Coding",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024",
    title: "Frontend Developer <span> Rewize </span>",
    desc: "Co-op experience where we had to build an AI powered promotions website.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022",
    title: "Customer Service Representative <span> Foundever™ </span>",
    desc: "Efficiently communicate with customers, handle property damage and sensitive issues, assess property features, and work independently to meet targets and goals.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2022",
    title: "Administrative Assistant <span> VW Autoeuropa </span>",
    desc: "Main tasks were to manage the training that took place throughout the company, from preparing the training rooms to recording the training in SAP HR.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "Web Development Bootcamp <span> Ironhack </span>",
    desc: "Frontend - HTML5, CSS3, JavaScript, ReactJS, & Git/Github / Backend - NodeJS, ExpressJS, MongoDB",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2010 - 2012",
    title: "Postgraduate in Business Sciences <span> IPS (ESCE) </span>",
    desc: "Organizational Behavior, Organizational Law, Global Economy, Finance, Production Management, Management Control, Quality Management and Commercial Management.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2007 - 2010",
    title: "Bachelor Degree <span> Lusófona University </span>",
    desc: "HR Management, General Accounting; Organizational Psychosociology; Business Management; Event Planning; Financial Management and Analysis; Hotel Management; Restaurant Management; Quality Management",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "95",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "95",
  },

  {
    id: 3,
    title: "JavaScript",
    percentage: "85",
  },

  {
    id: 4,
    title: "ReactJS",
    percentage: "95",
  },

  {
    id: 5,
    title: "NextJS",
    percentage: "80",
  },

  {
    id: 6,
    title: "Framer Motion",
    percentage: "80",
  },

  {
    id: 7,
    title: "Tailwind CSS",
    percentage: "95",
  },

  {
    id: 8,
    title: "MongoDB",
    percentage: "70",
  },
  {
    id: 9,
    title: "ExpressJS",
    percentage: "70",
  },
  {
    id: 10,
    title: "NodeJS",
    percentage: "70",
  },
  {
    id: 11,
    title: "ThreeJS",
    percentage: "40",
  },
  {
    id: 12,
    title: "SCSS",
    percentage: "95",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Snake Game",
    details: [
      {
        icon: <FiFileText />,
        title: "Type: ",
        desc: "Game",
      },
      {
        icon: <FiUser />,
        title: "Client: ",
        desc: "N/A",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: "https://t.ly/YsCQm",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Marvel Universe",
    details: [
      {
        icon: <FiFileText />,
        title: "Type: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client: ",
        desc: "N/A",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "ReactJS / RestAPI",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: "https://t.ly/oGgCr",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Accountable.me",
    details: [
      {
        icon: <FiFileText />,
        title: "Type: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client: ",
        desc: "N/A",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "NodeJS / MongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://t.ly/gNY0T",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Portfolio v1",
    details: [
      {
        icon: <FiFileText />,
        title: "Type: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client: ",
        desc: "N/A",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "ReactJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: "https://t.ly/0E9-I",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Portfolio v2",
    details: [
      {
        title: "Type: ",
        desc: "Website",
      },
      {
        title: "Client: ",
        desc: "N/A",
      },
      {
        title: "Language : ",
        desc: "ReactJS",
      },
      {
        title: "Preview: ",
        desc: "N/A",
      },
    ],
  },

  /*{
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },*/
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
