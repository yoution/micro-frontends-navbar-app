/**
 * Config for the All Apps menu.
 */
import appTaasIcon from "../assets/images/app-taas.svg";
import appSkillSearchIcon from "../assets/images/app-skill-search.svg";
import appProjectsIcon from "../assets/images/app-projects.svg";
import appChallengeManagerIcon from "../assets/images/app-challenge-manager.svg";
import appName1Icon from "../assets/images/app-name-1.svg";
import appName2Icon from "../assets/images/app-name-2.svg";

export const APPS = [
  {
    title: "TaaS",
    icon: appTaasIcon,
    path: "/react-example",
    menu: [
      { title: "My Teams", path: "/react-example" },
      { title: "Feedback", path: "/react-example/feedback" },
      { title: "Invoices", path: "/react-example/invoices" },
      { title: "Reports", path: "/react-example/reports" },
    ],
  },
  {
    title: "Skill Search",
    icon: appSkillSearchIcon,
    path: "/angular-example",
    menu: [
      { title: "Search", path: "/angular-example" },
      {
        title: "Group",
        children: [
          { title: "Development", path: "/angular-example/group/development" },
          { title: "Design", path: "/angular-example/group/design" },
          { title: "Q&A", path: "/angular-example/group/qa" },
        ],
      },
      { title: "Data Import", path: "/angular-example/data-import" },
    ],
  },
  {
    title: "Projects",
    icon: appProjectsIcon,
    path: "/projects",
    menu: [
      { title: "Projects Main Page", path: "/projects" },
      { title: "Projects Page 1", path: "/projects/page-1" },
      { title: "Projects Page 2", path: "/projects/page-2" },
      { title: "Projects Page 3", path: "/projects/page-3" },
    ],
  },
  {
    title: "Challenge Manager",
    icon: appChallengeManagerIcon,
    path: "/challenge-manager",
    menu: [
      { title: "Challenge Manager Main Page", path: "/challenge-manager" },
      { title: "Challenge Manager Page 1", path: "/challenge-manager/page-1" },
      { title: "Challenge Manager Page 2", path: "/challenge-manager/page-2" },
      { title: "Challenge Manager Page 3", path: "/challenge-manager/page-3" },
    ],
  },
  {
    title: "App Name",
    icon: appName1Icon,
    path: "/app-path-1",
    menu: [
      { title: "App Name Main Page", path: "/app-path-1" },
      { title: "App Name Page 1", path: "/app-path-1/page-1" },
      { title: "App Name Page 2", path: "/app-path-1/page-2" },
      { title: "App Name Page 3", path: "/app-path-1/page-3" },
    ],
  },
  {
    title: "App Name",
    icon: appName2Icon,
    path: "/app-path-2",
    menu: [
      { title: "App Name Main Page", path: "/app-path-2" },
      {
        title: "App Name Submenu",
        children: [
          { title: "Subpage 1", path: "/app-path-2/submenu/page-1" },
          { title: "Subpage 2", path: "/app-path-2/submenu/page-2" },
          { title: "Subpage 3", path: "/app-path-2/submenu/page-3" },
        ],
      },
      { title: "App Name Page", path: "/app-path-2/page" },
    ],
  },
];
