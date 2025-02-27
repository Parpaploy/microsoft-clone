import { ReactNode } from "react";

export interface IPcContentCardProps {
  image: string;
  title: string;
  description: string;
  buttonName: string;
}

export interface IPcEmblaCaroucelProps {
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

export interface IMobileEmblaCaroucelProps {
  image: string;
  title: string;
  description: string;
  btnName: string;
}

export interface ICategoryMenuProps {
  menuIcon: string;
  menuName: string;
}
