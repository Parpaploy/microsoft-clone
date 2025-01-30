import { ImagePath } from "../../../../constants/image-path";
import { PiShoppingCartLight } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import "./mobile-navbar.css";

export default function MobileNavbar() {
  return (
    <>
      <div
        style={{ padding: `0 3vw` }}
        className="w-[100%] h-[7svh] bg-white flex justify-between items-center text-[0.9vw] font-light"
      >
        <div className="flex items-center gap-[3vw]">
          <div className="text-[3vw] mb-nav-menu">
            <RxHamburgerMenu />
          </div>
          <div className="text-[2.5vw] mb-nav-menu">
            <VscSearch />
          </div>
        </div>
        <div className="w-auto h-[50%] mb-nav-menu">
          <img
            style={{ paddingBottom: `0.6svh` }}
            className="w-full h-full"
            src={ImagePath.logo}
          />
        </div>

        <div className="flex items-center h-full w-auto gap-[4vw]">
          <div className="text-[2.5vw] mb-nav-menu">
            <PiShoppingCartLight />
          </div>
          <div className="w-auto h-[60%] mb-nav-menu">
            <img
              className="w-full h-full"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NCA2NCcgc3Ryb2tlPScjNzA3MDcwJz48ZyBjbGFzcz0nbWVjdHJsX3N0cm9rZScgc3Ryb2tlLXdpZHRoPScxLjknIGZpbGw9J25vbmUnPjxjaXJjbGUgY3g9JzMyJyBjeT0nMzInIHI9JzMwLjI1Jy8+PGcgdHJhbnNmb3JtPSdtYXRyaXgoMS4xIDAgMCAxLjEgOC44IDUuNjEpJz48Y2lyY2xlIGNsYXNzPSdtZWN0cmxfc3Ryb2tlJyBjeD0nMjAnIGN5PScxNicgcj0nNycvPjxwYXRoIGNsYXNzPSdtZWN0cmxfc3Ryb2tlJyBkPSdNMzAgMzVoMTBtLTUtNXYxME0zMC44MzMgMzIuMDlBMTEgMTEgMCAwMDkgMzQnLz48L2c+PC9nPjwvc3ZnPg=="
            />
          </div>
        </div>
      </div>
    </>
  );
}
