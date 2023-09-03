import fashionDesign from "../assets/images/Fashion-Design.webp";
import graphicDesign from "../assets/images/graphicdesign.jpg";
import uiCommunity from "../assets/images/ui-community.webp";
import webDesign from "../assets/images/web-design.jpg";
import { LikedPage } from "../layout/components/AppMenu/components/PagesMenu";
import { MenuItem } from "../layout/components/AppMenu/components/MainMenu";
import {
  faChartSimple,
  faUsers,
  faCalendar,
  faFilm,
  faImage,
  faFileLines,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const menuItems: MenuItem[] = [
  { icon: faChartSimple, text: "Feed" },
  { icon: faChartPie, text: "Analytics" },
  { icon: faUsers, text: "Friends" },
  { icon: faCalendar, text: "Events" },
  { icon: faFilm, text: "Watch Videos" },
  { icon: faImage, text: "Photos" },
  { icon: faFileLines, text: "Files" },
];

const likedPages: LikedPage[] = [
  { name: "Fashion Design", image: fashionDesign },
  { name: "Graphic Design", image: graphicDesign, count: 25 },
  { name: "UI/UX Community", image: uiCommunity },
  { name: "Web Designer", image: webDesign },
];

const friendsData = [
  {
    name: "Alex Guerrero",
    isActive: false,
    lastActive: "10 min",
    seed: "sally",
  },
  {
    name: "Sara Mendoza",
    isActive: true,
    lastActive: "",
    seed: "farah",
  },
  {
    name: "Ronald Roberts",
    isActive: true,
    lastActive: "",
    seed: "Ali",
  },
  {
    name: "Nancy Lee",
    isActive: false,
    lastActive: "12 min",
    seed: "sara",
  },
  {
    name: "Marie Jacksone",
    isActive: false,
    lastActive: "7 min",
    seed: "Marie",
  },
  {
    name: "Nick Powell",
    isActive: true,
    lastActive: "",
    seed: "Nick",
  },
  {
    name: "Sandra Rivera",
    isActive: true,
    lastActive: "",
    seed: "Sandra",
  },
  {
    name: "Alex Freeman",
    isActive: false,
    lastActive: "5 min",
    seed: "Alex",
  },
  {
    name: "Jerry Jordan",
    isActive: true,
    lastActive: "",
    seed: "Jerry",
  },
];

const countries = [
  "Australia",
  "Brazil",
  "Palestine",
  "Jordan",
  "Egypt",
  "China",
  "Brazil",
  "Germany",
  "India",
  "Spain",
  "United States",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Arabic",
  "Russian",
  "Japanese",
  "Italian",
  "Portuguese",
  "Dutch",
  "Korean",
  "Turkish",
  "Polish",
  "Swedish",
  "Danish",
  "Norwegian",
];

export { menuItems, likedPages, friendsData, countries, languages };
