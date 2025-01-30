import { ImagePath } from "../../../constants/image-path";
import { leftNavbarMenu } from "../../../constants/web-content";
import { PiShoppingCartLight } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import "./pc-navbar.css";

export default function PcNavbar() {
  return (
    <>
      <div
        style={{ padding: `0 3vw` }}
        className="w-[100%] h-[7svh] bg-gray-300 flex justify-between items-center text-[0.9vw] font-light"
      >
        <div className="w-auto h-full flex items-center">
          <div className="w-auto h-[45%] py-[2vw]">
            <img src={ImagePath.logo} className="w-full h-full" />
          </div>
          {leftNavbarMenu.map((menu: string, index: number) => (
            <>
              <div
                style={{ padding: `0 1vw` }}
                className="h-full w-auto flex items-center pc-nav-menu"
                key={index}
              >
                <span className="span-outline">{menu}</span>
              </div>
            </>
          ))}
        </div>

        <div className="w-auto h-full flex items-center">
          <div
            style={{ marginRight: `1.3vw` }}
            className="flex h-full w-auto items-center gap-[5px] pc-nav-menu"
          >
            <div className="flex items-center span-outline">All Microsoft</div>
            <div className="arrow-down-icon text-[1.2vw] text-gray-500">
              <IoIosArrowDown />
            </div>
          </div>

          <div
            style={{ marginRight: `1.3vw` }}
            className="flex h-full w-auto items-center gap-[5px] pc-nav-menu"
          >
            <div className="flex items-center span-outline">Search</div>
            <div className="search-icon text-[1.2vw]">
              <VscSearch />
            </div>
          </div>

          <div
            style={{ marginRight: `1.3vw` }}
            className="flex h-full w-auto items-center gap-[5px] pc-nav-menu"
          >
            <div className="flex items-center span-outline">Cart</div>
            <div className="cart-icon text-[1.3vw]">
              <PiShoppingCartLight />
            </div>
          </div>

          <div className="flex h-full w-auto items-center gap-[15px] sign-in">
            <div className="flex items-center">Sign in</div>
            <div className="sign-in-img w-auto h-[60%]">
              <img
                className="w-full h-full"
                src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NCA2NCcgc3Ryb2tlPScjNzA3MDcwJz48ZyBjbGFzcz0nbWVjdHJsX3N0cm9rZScgc3Ryb2tlLXdpZHRoPScxLjknIGZpbGw9J25vbmUnPjxjaXJjbGUgY3g9JzMyJyBjeT0nMzInIHI9JzMwLjI1Jy8+PGcgdHJhbnNmb3JtPSdtYXRyaXgoMS4xIDAgMCAxLjEgOC44IDUuNjEpJz48Y2lyY2xlIGNsYXNzPSdtZWN0cmxfc3Ryb2tlJyBjeD0nMjAnIGN5PScxNicgcj0nNycvPjxwYXRoIGNsYXNzPSdtZWN0cmxfc3Ryb2tlJyBkPSdNMzAgMzVoMTBtLTUtNXYxME0zMC44MzMgMzIuMDlBMTEgMTEgMCAwMDkgMzQnLz48L2c+PC9nPjwvc3ZnPg=="
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
