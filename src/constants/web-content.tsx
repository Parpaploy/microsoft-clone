import {
  IBottomFooterProps,
  IFooterData,
  IPcContentCardProps,
  IPcEmblaCaroucelProps,
} from "../interfaces/card.interface";
import { IPcCategoryMenuProps } from "../pages/pc-pages/components/pc-category-menu";
import { IoEarth } from "react-icons/io5";

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

export const pcCaroucelImage: IPcEmblaCaroucelProps[] = [
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

export const footerData: IFooterData = {
  columns: [
    {
      title: "What's new",
      links: [
        { title: "Surface Pro", href: "" },
        { title: "Surface Laptop", href: "" },
        { title: "Surface Laptop Studio 2", href: "" },
        { title: "Surface Laptop Go 3", href: "" },
        { title: "Microsoft Copilot", href: "" },
        { title: "AI in Windows", href: "" },
        { title: "Explore Microsoft products", href: "" },
        { title: "Windows 11 apps", href: "" },
      ],
    },
    {
      title: "Microsoft Store",
      links: [
        { title: "Account profile", href: "" },
        { title: "Download Center", href: "" },
        { title: "Microsoft Store support", href: "" },
        { title: "Returns", href: "" },
        { title: "Order tracking", href: "" },
        { title: "Certified Refurbished", href: "" },
        { title: "Microsoft Store Promise", href: "" },
        { title: "Flexible Payments", href: "" },
      ],
    },
    {
      title: "Education",
      links: [
        { title: "Microsoft in education", href: "" },
        { title: "Devices for education", href: "" },
        { title: "Microsoft Teams for Education", href: "" },
        { title: "Microsoft 365 Education", href: "" },
        { title: "How to buy for your school", href: "" },
        { title: "Educator training and development", href: "" },
        { title: "Deals for students and parents", href: "" },
        { title: "Azure for students", href: "" },
      ],
    },
    {
      title: "Business",
      links: [
        { title: "Microsoft Cloud", href: "" },
        { title: "Microsoft Security", href: "" },
        { title: "Dynamics 365", href: "" },
        { title: "Microsoft 365", href: "" },
        { title: "Microsoft Power Platform", href: "" },
        { title: "Microsoft Teams", href: "" },
        { title: "Microsoft 365 Copilot", href: "" },
        { title: "Small Business", href: "" },
      ],
    },
    {
      title: "Developer & IT",
      links: [
        { title: "Azure", href: "" },
        { title: "Microsoft Developer", href: "" },
        { title: "Documentation", href: "" },
        { title: "Microsoft Learn", href: "" },
        { title: "Microsoft Tech Community", href: "" },
        { title: "Azure Marketplace", href: "" },
        { title: "AppSource", href: "" },
        { title: "Visual Studio", href: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Careers", href: "" },
        { title: "About Microsoft", href: "" },
        { title: "Company news", href: "" },
        { title: "Privacy at Microsoft", href: "" },
        { title: "Investors", href: "" },
        { title: "Diversity and inclusion", href: "" },
        { title: "Accessibility", href: "" },
        { title: "Sustainability", href: "" },
      ],
    },
  ],
};

export const bottomFooterData: IBottomFooterProps[] = [
  {
    title: "English (United States)",
    link: "",
    icon: <IoEarth size={24} />,
  },
  {
    title: "Your Privacy Choices",
    link: "",
    icon: (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 0 32 14"
        height="8%"
        width="9%"
        preserveAspectRatio="xMinYMid meet"
      >
        <title>Your Privacy Choices Opt-Out Icon</title>
        <path
          d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#fff" }}
        />
        <path
          d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#06f" }}
        />
        <path
          d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
          style={{ fill: "#06f" }}
        />
      </svg>
    ),
  },
  {
    title: "Customer Helth Privacy",
    link: "",
    icon: null,
  },
  {
    title: "Sitemap",
    link: "",
    icon: null,
  },
  {
    title: "Contact Microsoft",
    link: "",
    icon: null,
  },
  {
    title: "Privacy",
    link: "",
    icon: null,
  },
  {
    title: "Term of use",
    link: "",
    icon: null,
  },
  {
    title: "Trademarks",
    link: "",
    icon: null,
  },
  {
    title: "Safety & eco",
    link: "",
    icon: null,
  },
  {
    title: "Recycling",
    link: "",
    icon: null,
  },
  {
    title: "About our ads",
    link: "",
    icon: null,
  },
];
