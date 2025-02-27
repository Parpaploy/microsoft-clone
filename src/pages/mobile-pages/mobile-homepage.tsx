import { MobileEmblaCarousel } from "../../components/caroucels/mobile-caroucel";
import { CategoryMenuContent } from "../../constants/web-content";
import MobileFooter from "../../layouts/mobile-layout/components/mobile-footer/mobile-footer";
import MobileCategoryMenu, {
  ICategoryMenuProps,
} from "./components/mobile-category-menu";
import "./mobile-homepage.css";

export default function MobileHomePage() {
  return (
    <>
      <div
        className="w-full min-h-[86svh] bg-white z-0"
        style={{ marginTop: "14svh" }}
      >
        <div style={{ marginBottom: `14%` }}>
          <MobileEmblaCarousel />
        </div>

        <div
          style={{ padding: `4% 3%`, marginTop: `2%`, marginBottom: `3%` }}
          className="w-full h-auto flex flex-wrap gap-x-15 gap-y-5 items-center justify-center"
        >
          {CategoryMenuContent.map(
            (value: ICategoryMenuProps, index: number) => {
              return (
                <MobileCategoryMenu
                  key={index}
                  menuIcon={value.menuIcon}
                  menuName={value.menuName}
                />
              );
            }
          )}
        </div>
      </div>

      <MobileFooter />
    </>
  );
}
