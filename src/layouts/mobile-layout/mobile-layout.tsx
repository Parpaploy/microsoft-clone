import { Outlet } from "react-router-dom";
import MobileNavbar from "./components/mobile-navbar/mobile-navbar";
import MobileSubNavbar from "./components/mobile-sub-navbar/mobile-sub-navbar";

export default function MobileLayout() {
  return (
    <>
      <MobileNavbar />
      <MobileSubNavbar />
      <Outlet />
    </>
  );
}
