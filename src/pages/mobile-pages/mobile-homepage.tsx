import { MobileEmblaCarousel } from "../../components/caroucels/mobile-caroucel";
import MobileFooter from "../../layouts/mobile-layout/components/mobile-footer/mobile-footer";
import "./mobile-homepage.css";

export default function MobileHomePage() {
  return (
    <>
      <div className="w-full min-h-[86svh] bg-white"></div>

      <div style={{ marginBottom: `4%` }}>
        <MobileEmblaCarousel />
      </div>

      <MobileFooter />
    </>
  );
}
