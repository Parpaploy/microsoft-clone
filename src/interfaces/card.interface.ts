import { ReactNode } from "react";

export interface IPcContentCardProps {
  image: string;
  title: string;
  description: string;
  buttonName: string;
}

export interface IEmblaCaroucelProps {
  isCard: boolean;
  image: string;
  bgCol: string;
  title: string;
  description: string;
  btnName: string;
}

export interface IFooterLink {
  title: string;
  href: string;
}

export interface IFooterColumn {
  title: string;
  links: IFooterLink[];
}

export interface IFooterData {
  columns: IFooterColumn[];
}

export interface IBottomFooterProps {
  title: string;
  link: string;
  icon: ReactNode;
}
