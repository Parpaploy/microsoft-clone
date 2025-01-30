import "./mobile-sub-navbar.css";
import { IoIosArrowForward } from "react-icons/io";

export default function MobileSubNavbar() {
  return (
    <>
      <div
        style={{ padding: `2svh 10vw` }}
        className="w-full h-auto min-h-[7svh] bg-[#0067b8] flex justify-center items-center text-white font-medium text-center more-content"
      >
        Pay your way, with flexible payment options available at checkout.
        <span className="more-content-arrorw">
          <IoIosArrowForward />
        </span>
      </div>
    </>
  );
}
