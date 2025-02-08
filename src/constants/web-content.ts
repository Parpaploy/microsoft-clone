import {
  IEmblaCaroucelProps,
  IPcContentCardProps,
} from "../interfaces/card.interface";
import { IPcCategoryMenuProps } from "../pages/pc-pages/components/pc-category-menu";

export const leftNavbarMenu: string[] = [
  "Microsoft 365",
  "Teams",
  "Copilot",
  "Windows",
  "Suface",
  "Xbox",
  "Deals",
  "Small Business",
  "Support",
];

export const PcCardContentTop: IPcContentCardProps[] = [
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Family-AI-11Ed-Intel-COMMR?wid=834&hei=470&fit=crop",
    title: "Compare all Surface for Business",
    description:
      "Best-in-class security, supercharged productivity, lightweight design—find the best Surface to fit your needs.",
    buttonName: "Compare devices",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-Keyboard-Slim-Pen-Arc-Mouse-COMMR?wid=834&hei=470&fit=crop",
    title: "Keyboards, mice, and more",
    description:
      "Shop accessories designed to turn your Surface devices into powerhouses of productivity.",
    buttonName: "Shop now",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=834&hei=470&fit=crop",
    title: "Microsoft 365 Copilot",
    description:
      "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
    buttonName: "Learn more",
  },
];

export const PcCategoryMenuContent: IPcCategoryMenuProps[] = [
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40",
    menuName: "Shop Surface devices",
  },
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40",
    menuName: "Shop Xbox games and consoles",
  },
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Accessories?wid=40&hei=40",
    menuName: "Shop for accessories",
  },
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Business?wid=40&hei=40",
    menuName: "Shop for your business",
  },
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icon-PC?wid=40&hei=40",
    menuName: "Find your next PC",
  },
  {
    menuIcon:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40",
    menuName: "Choose your Microsoft 365",
  },
];

export const PcCardContentBottom: IPcContentCardProps[] = [
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-Copilot-Plus-PC-Sapphire?wid=406&hei=230&fit=crop",
    title: "Save up to $500 on select Surface Pro, Copilot+ PC",
    description:
      "Score savings on a fast, flexible 2-in-1 built for advanced AI experiences. For a limited time.",
    buttonName: "Shop now",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-AI-7Ed-Platinum-MC006?wid=406&hei=230&fit=crop",
    title: "Save up to $500 on select Surface Laptop, Copilot+ PC",
    description:
      "Save big on an AI-powered companion made for next-gen performance. For a limited time.",
    buttonName: "Shop now",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-M365-Icons-Teams?wid=406&hei=230&fit=crop",
    title: "Achieve the extraordinary",
    description:
      "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
    buttonName: "Shop Microsoft 365",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Native-App-ROW?wid=406&hei=230&fit=crop",
    title: "Copilot is your AI companion",
    description:
      "Always by your side, ready to support you whenever and wherever you need it.",
    buttonName: "Dowload the Copilot app",
  },
];

export const PcCardContentForBusiness: IPcContentCardProps[] = [
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=406&hei=230&fit=crop",
    title: "Windows 11 for business",
    description:
      "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
    buttonName: "Learn more",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Visual-Studio-Icon?wid=406&hei=230&fit=crop",
    title: "Visual Studio 2022",
    description:
      "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services, and games.",
    buttonName: "Dowload Visual Studio 2022",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=406&hei=230&fit=crop",
    title: "Get Microsoft Teams for your business",
    description:
      "Online meetings, chat, real-time collaboration, and shared cloud storage—all in one place.",
    buttonName: "Find the right plan for your business",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=406&hei=230&fit=crop",
    title: "Join the era of AI",
    description:
      "Create, communicate, and code with the latest Microsoft AI solutions.",
    buttonName: "Explore AI solutions",
  },
];

export const PcCardContentExplore: IPcContentCardProps[] = [
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-AI-Environment-Green-Hills?wid=834&hei=470&fit=crop",
    title: "Tackling climate challenges with AI",
    description:
      "AI’s analytical power is helping to optimize complex systems like supply chains, electricity grids, and atmospheric sciences in ways that can help the planet.",
    buttonName: "Find out more",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-How-AI-Breaks-Down-Barriers-To-Inclusivity?wid=834&hei=470&fit=crop",
    title: "How AI boosts inclusivity at work",
    description:
      "A first-of-its-kind study of neurodivergent and disabled Copilot users shows the ways AI can aid workplace accessibility.",
    buttonName: "Read the insights",
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Worklab-Juan-Lavista-Ferres?wid=834&hei=470&fit=crop",
    title: "Confronting global challenges with AI",
    description:
      "The head of Microsoft's AI for Good Lab shares how AI can help organizations further their humanitarian missions.",
    buttonName: "Find out more",
  },
];

export const caroucelImage: IEmblaCaroucelProps[] = [
  {
    isCard: false,
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-NFL-2025-Kayvon-Thibodeaux:VP2-859x540",
    bgCol: "#060B37",
    title: "A touchdown for technology",
    description:
      "Learn how Microsoft is teaming up with the NFL to help players sharpen their game and uplift their communities.",
    btnName: "Find out more",
  },
  {
    isCard: true,
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Black-History-Month-Code-of-Us-2025:VP2-859x540",
    bgCol: "#F8E1CE",
    title: "Celebrating Black History Month",
    description:
      "Discover the unique stories of Black and African American employees who help make Microsoft a leader in tech.",
    btnName: "Learn more",
  },
];
