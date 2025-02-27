import "./moblie-category-menu.css";

export interface ICategoryMenuProps {
  menuIcon: string;
  menuName: string;
}

export default function MobileCategoryMenu(props: ICategoryMenuProps) {
  return (
    <>
      <div
        style={{ padding: `0.7vw 0` }}
        className="flex flex-col justify-center items-center gap-2 category-menu"
      >
        <div className="w-[5vw] h-auto icon-img">
          <img
            className="w-full h-auto"
            src={props.menuIcon}
            alt={props.menuName}
          />
        </div>
        <div
          style={{ textDecoration: `underline` }}
          className="text-[#0167B8] font-semibold whitespace-nowrap"
        >
          {props.menuName}
        </div>
      </div>
    </>
  );
}
