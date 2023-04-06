import { $madeToPlay, $letterboxd } from "../../assets/colors";
import MadeToPlayImage from "../../images/home/covermockup.png";
import LetterboxdImage from "../../images/home/home1mock.png";

export const projectData = [
  {
    title: "Made To Play",
    description:
      "This project was designed to service the East Boston community, specifically for parents and young children. In efforts to close the gap for accessible developmental screening, this book contains easy, DIY toys that parents can make and engage with their child for monitoring.",
    skills: "Branding | Layout Design | User Testing",
    src: MadeToPlayImage,
    color: $madeToPlay,
    to: "/made-to-play",
  },
  {
    title: "Letterboxd",
    description:
      "As a user of this application, I noticed pitfalls in Letterboxd's current user experience and interface. This personal project focuses on redesigning screens and processes to improve engagement across the product.",
    skills: "User Research | User Experience | Mobile Design",
    src: LetterboxdImage,
    color: $letterboxd,
    to: "/letterboxd",
  },
];
