/**
 * Config for the All Apps menu.
 */
import appReactIcon from "../assets/images/reactjs.svg";
import appAngularIcon from "../assets/images/angularjs.svg";
import appTaasIcon from "../assets/images/integrations.svg";
const appSubmissionReviewIcon = appTaasIcon;
import manageWorkIcon from "../assets/images/managework.svg";
import ondemandTalentIcon from "../assets/images/ondemand-talent.svg";
import myOrganizationIcon from "../assets/images/my-organization.svg";
const integrationsIcon = appTaasIcon;
const customerplatformIcon = manageWorkIcon;
const workmanagerIcon = ondemandTalentIcon;
import learnIcon from "../assets/images/learn.svg";
import earnIcon from "../assets/images/earn.svg";
import homeIcon from "../assets/images/home.svg";
import homeGreenIcon from "../assets/images/home-green.svg";
import projectsIcon from "../assets/images/projects.svg";
import projectsGreenIcon from "../assets/images/projects-green.svg";
import crowdsourceIcon from "../assets/images/crowdsource.svg";
import crowdsourceGreenIcon from "../assets/images/crowdsource-green.svg";
import myteamsIcon from "../assets/images/my-teams.svg";
import myteamsGreenIcon from "../assets/images/my-teams-green.svg";
import skillSearchIcon from "../assets/images/skill-search.svg";
import skillSearchGreenIcon from "../assets/images/skill-search-green.svg";
import organizationSettingsIcon from "../assets/images/organization-settings.svg";
import organizationSettingsGreenIcon from "../assets/images/organization-settings-green.svg";
import integrationsPluginIcon from "../assets/images/integrations-plugins.svg";
import integrationsPluginGreenIcon from "../assets/images/integrations-plugins-green.svg";
import apisIcon from "../assets/images/apis.svg";
import apisGreenIcon from "../assets/images/apis-green.svg";
import myWorkIcon from "../assets/images/my-work.svg";
import myWorkGreenIcon from "../assets/images/my-work-green.svg";
import findWorkIcon from "../assets/images/find-work.svg";
import findWorkGreenIcon from "../assets/images/find-work-green.svg";
import thriveIcon from "../assets/images/thrive.svg";
import thriveGreenIcon from "../assets/images/thrive-green.svg";
import skillBuilderIcon from "../assets/images/skill-builder.svg";
import skillBuilderGreenIcon from "../assets/images/skill-builder-green.svg";
import reportsIcon from "../assets/images/reports.svg";
import reportsGreenIcon from "../assets/images/reports-green.svg";
import testimonalsIcon from "../assets/images/testimonals.svg";
import testimonalsGreenIcon from "../assets/images/testimonals-green.svg";
import faqIcon from "../assets/images/faq.svg";
import faqGreenIcon from "../assets/images/faq-green.svg";
import discussionsIcon from "../assets/images/discussions.svg";
import discussionsGreenIcon from "../assets/images/discussions-green.svg";
import filesIcon from "../assets/images/files.svg";
import filesGreenIcon from "../assets/images/files-green.svg";

/**
 * Micro-app categories
 */
export const APP_CATEGORIES = [
  {
    category: "Manage",
    apps: [
      {
        title: "TaaS",
        icon: appTaasIcon,
        path: "/taas/myteams",
        menu: [
          {
            title: "My Teams",
            path: "/taas/myteams",
            icon: myteamsIcon,
            activeIcon: myteamsGreenIcon,
          },
        ],
      },
      {
        title: "Submission Review",
        icon: appSubmissionReviewIcon,
        path: "/submissions",
        menu: [],
      },
      {
        title: "Manage Work",
        icon: manageWorkIcon,
        path: "/manage-work",
        menu: [
          {
            title: "Homepage",
            path: "/manage-work",
            icon: homeIcon,
            activeIcon: homeGreenIcon,
          },
          {
            title: "Projects",
            path: "/manage-work/projects",
            icon: projectsIcon,
            activeIcon: projectsGreenIcon,
          },
          {
            title: "Crowdsource",
            path: "/manage-work/crowdsource",
            icon: crowdsourceIcon,
            activeIcon: crowdsourceGreenIcon,
          },
        ],
      },
      {
        title: "On-Demand Talent",
        icon: ondemandTalentIcon,
        path: "/ondemand-talent",
        menu: [
          {
            title: "Homepage",
            path: "/ondemand-talent",
            icon: homeIcon,
            activeIcon: homeGreenIcon,
          },
          {
            title: "My Teams",
            path: "/ondemand-talent/my-teams",
            icon: myteamsIcon,
            activeIcon: myteamsGreenIcon,
          },
        ],
      },
      {
        title: "My Organization",
        icon: myOrganizationIcon,
        path: "/my-organization",
        menu: [
          {
            title: "Skill Search",
            path: "/my-organization",
            icon: skillSearchIcon,
            activeIcon: skillSearchGreenIcon,
          },
          {
            title: "Organization Settings",
            path: "/my-organization/settings",
            icon: organizationSettingsIcon,
            activeIcon: organizationSettingsGreenIcon,
          },
        ],
      },
      {
        title: "Integrations",
        icon: integrationsIcon,
        path: "/integrations",
        menu: [
          {
            title: "Integrations Plug-Ins",
            path: "/integrations",
            icon: integrationsPluginIcon,
            activeIcon: integrationsPluginGreenIcon,
          },
          {
            title: "APIs",
            path: "/integrations/apis",
            icon: apisIcon,
            activeIcon: apisGreenIcon,
          },
        ],
      },
      {
        title: "Customer Platform",
        icon: customerplatformIcon,
        path: "/customer-platform",
        menu: [
          {
            title: "Catalog",
            path: "/customer-platform",
            icon: homeIcon,
            activeIcon: homeGreenIcon,
          },
          {
            title: "My Work",
            path: "/customer-platform/my-work",
            icon: apisIcon,
            activeIcon: apisGreenIcon,
          },
          {
            title: "Reports",
            path: "/customer-platform/reports",
            icon: reportsIcon,
            activeIcon: reportsGreenIcon,
          },
          {
            title: "Testimonals",
            path: "/customer-platform/testimonals",
            icon: testimonalsIcon,
            activeIcon: testimonalsGreenIcon,
          },
          {
            title: "FAQ",
            path: "/customer-platform/FAQ",
            icon: faqIcon,
            activeIcon: faqGreenIcon,
          },
        ],
      },
      {
        title: "Work Manager",
        icon: workmanagerIcon,
        path: "/work-manager",
        menu: [
          {
            title: "Challenges/Tasks",
            path: "/work-manager",
            icon: homeIcon,
            activeIcon: homeGreenIcon,
          },
          {
            title: "Discussions",
            path: "/work-manager/discussions",
            icon: discussionsIcon,
            activeIcon: discussionsGreenIcon,
          },
          {
            title: "Files & Links",
            path: "/work-manager/files-links",
            icon: filesIcon,
            activeIcon: filesGreenIcon,
          },
          {
            title: "Reports",
            path: "/work-manager/reports",
            icon: reportsIcon,
            activeIcon: reportsGreenIcon,
          },
        ],
      },
    ],
  },
  {
    category: "Do",
    apps: [
      {
        title: "Earn",
        icon: earnIcon,
        path: "/earn",
        menu: [],
      },
      {
        title: "Learn",
        icon: learnIcon,
        path: "/learn",
        menu: [
          {
            title: "Thrive",
            path: "/learn",
            icon: thriveIcon,
            activeIcon: thriveGreenIcon,
          },
          {
            title: "Skill Builder",
            path: "/learn/skill-builder",
            icon: skillBuilderIcon,
            activeIcon: skillBuilderGreenIcon,
          },
        ],
      },
      {
        title: "Tasks",
        icon: manageWorkIcon,
        path: "/task-marketplace",
        menu: [],
      },
    ],
  },
  {
    category: "Sample",
    apps: [
      {
        title: "React Example",
        icon: appReactIcon,
        path: "/micro-frontends-react-route",
        menu: [],
      },
      {
        title: "Angular Example",
        icon: appAngularIcon,
        path: "/micro-frontends-angular-route",
        menu: [],
      },
      {
        title: "Model",
        icon: appReactIcon,
        path: "/model",
        menu: [],
      },
    ],
  },
];
