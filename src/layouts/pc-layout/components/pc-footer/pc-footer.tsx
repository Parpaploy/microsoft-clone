import {
  bottomFooterData,
  footerData,
} from "../../../../constants/web-content.tsx";
import {
  IBottomFooterProps,
  IFooterColumn,
} from "../../../../interfaces/card.interface";
import { LiaCopyright } from "react-icons/lia";
import "./pc-footer.css";

export default function PcFooter() {
  return (
    <footer
      className="bg-[#F2F2F2] w-full h-full text-[#616161] flex flex-col"
      style={{ padding: `2.5% 4.5%`, paddingBottom: `2%` }}
    >
      <div className="flex flex-wrap justify-start items-start gap-x-24">
        {footerData.columns.map((category: IFooterColumn, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-start gap-3 text-[1.4svh]"
            style={{ marginBottom: `3%` }}
          >
            <h1 className="font-medium text-[2svh]">{category.title}</h1>
            {category.links.map((link, linkIndex: number) => (
              <a
                key={linkIndex}
                href={link.href}
                className="w-fit hover:underline"
              >
                {link.title}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6">
        {bottomFooterData.map((value: IBottomFooterProps, index: number) => {
          return (
            <div
              key={index}
              className="text-[1.4svh] flex items-center gap-2 w-fit hover:underline"
            >
              {value.icon}
              <a href={value.link}>{value.title}</a>
            </div>
          );
        })}

        <div className="text-[1.4svh] flex items-center gap-0.5 w-fit">
          <LiaCopyright />
          <span>Microsoft 2025</span>
        </div>
      </div>
    </footer>
  );
}
