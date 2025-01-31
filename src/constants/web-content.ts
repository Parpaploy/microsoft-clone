import { IPcContentCardProps } from "../pages/pc-pages/components/pc-content-card";

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

export const PcCardContent: IPcContentCardProps[] = [
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
