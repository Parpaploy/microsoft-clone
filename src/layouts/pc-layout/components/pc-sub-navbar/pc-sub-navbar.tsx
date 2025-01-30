import "./pc-sub-navbar.css";
import { IoIosArrowForward } from "react-icons/io";

export default function PcSubNavbar() {
  return (
    <>
      <div className="w-full h-[7svh] bg-[#0067b8] flex justify-center items-center text-white font-medium more-content">
        Pay your way, with flexible payment options available at checkout.
        <span className="more-content-arrorw">
          <IoIosArrowForward />
        </span>
      </div>
    </>
  );
}
