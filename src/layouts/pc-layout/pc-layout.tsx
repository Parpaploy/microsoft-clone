import { Outlet } from "react-router-dom";
import PcNavbar from "./components/pc-navbar/pc-navbar";
import PcSubNavbar from "./components/pc-sub-navbar/pc-sub-navbar";

export default function PcLayout() {
  return (
    <>
      <PcNavbar />
      <PcSubNavbar />
      <Outlet />
    </>
  );
}
