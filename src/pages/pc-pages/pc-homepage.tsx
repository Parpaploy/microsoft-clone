import {
  PcCardContentBottom,
  PcCardContentExplore,
  PcCardContentForBusiness,
  PcCardContentTop,
  PcCategoryMenuContent,
} from "../../constants/web-content";
import { IPcContentCardProps } from "../../interfaces/card.interface";
import PcCategoryMenu, {
  IPcCategoryMenuProps,
} from "./components/pc-category-menu";
import PcContentCardBig from "./components/pc-content-card-big";
import PcContentCardSmall from "./components/pc-content-card-small";
import "./pc-homepage.css";

export default function PcHomePage() {
  return (
    <>
      <div className="w-full min-h-[86svh] bg-white">
        <div
          style={{ padding: `6svh` }}
          className="w-full h-[40svh] flex flex-col gap-[3vh] items-center pc-top"
        >
          <div className="w-full text-center text-[3.5vw] font-medium">
            New Surface Copilot+ PCs for Business
          </div>

          <div className="2vw">
            Introducing the first Surface Copilot+ PCs built with new Intel®
            Core™ Ultra processors (Series 2)—now available for pre-order.
          </div>

          <div className="flex gap-[2vw]">
            <div
              style={{ padding: `10px 15px`, borderRadius: `2px` }}
              className="w-200px bg-black text-white black-btn"
            >
              Surface Pro for Business
            </div>

            <div
              style={{ padding: `10px 15px`, borderRadius: `2px` }}
              className="w-200px bg-black text-white black-btn"
            >
              Surface Laptop for Business
            </div>
          </div>
        </div>

        <div>
          <video
            autoPlay
            muted
            typeof="video"
            src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/PLP-Video-Surface-Family-AI-11Ed-Platinum-Intel-COMMR-Desktop"
          ></video>
        </div>

        <div
          style={{ padding: `1% 5% 3%` }}
          className="w-full h-auto flex items-center justify-center gap-[2vw] pc-bottom"
        >
          {PcCardContentTop.map((value: IPcContentCardProps, index: number) => {
            return (
              <PcContentCardBig
                key={index}
                image={value.image}
                title={value.title}
                description={value.description}
                buttonName={value.buttonName}
              />
            );
          })}
        </div>

        <div
          style={{ padding: `4% 3%`, marginTop: `2%`, marginBottom: `3%` }}
          className="w-full h-auto flex flex-wrap gap-x-15 gap-y-5 items-center justify-center"
        >
          {PcCategoryMenuContent.map(
            (value: IPcCategoryMenuProps, index: number) => {
              return (
                <PcCategoryMenu
                  key={index}
                  menuIcon={value.menuIcon}
                  menuName={value.menuName}
                />
              );
            }
          )}
        </div>

        <div
          style={{ padding: `0 5% 3%` }}
          className="w-full h-auto flex items-center justify-center gap-[2vw]"
        >
          {PcCardContentBottom.map(
            (value: IPcContentCardProps, index: number) => {
              return (
                <PcContentCardSmall
                  key={index}
                  image={value.image}
                  title={value.title}
                  description={value.description}
                  buttonName={value.buttonName}
                />
              );
            }
          )}
        </div>

        <div style={{ cursor: `pointer`, margin: `4% 5%`, marginBottom: `6%` }}>
          <div
            style={{ padding: `6svh` }}
            className="w-full h-[65svh] console-shop"
          >
            <div className="w-[33.5%] h-full flex flex-col justify-center items-start gap-[4%]">
              <h1 className="font-medium text-[30px] whitespace-nowrap">
                Xbox controllers
              </h1>
              <p className="text-[16px]">
                Elite, wireless, adaptive—find the controller that fits your
                style of play
              </p>

              <button
                style={{ padding: `8px 12px`, borderRadius: `2px` }}
                className="w-fit text-white text-[1.2vw] font-medium bg-[#0167B8] pc-card-btn"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1
            style={{ padding: `2% 5% 0.5%` }}
            className="font-semibold text-[35px]"
          >
            For business
          </h1>
          <div
            style={{ padding: `0 5% 3%` }}
            className="w-full h-auto flex items-center justify-center gap-[2vw]"
          >
            {PcCardContentForBusiness.map(
              (value: IPcContentCardProps, index: number) => {
                return (
                  <PcContentCardSmall
                    key={index}
                    image={value.image}
                    title={value.title}
                    description={value.description}
                    buttonName={value.buttonName}
                  />
                );
              }
            )}
          </div>
        </div>

        <div style={{ marginTop: `-3%` }}>
          <h1
            style={{ padding: `2% 5% 0%` }}
            className="font-semibold text-[35px]"
          >
            Explore more about AI and Copilot
          </h1>
          <div
            style={{ padding: `1% 5% 3%` }}
            className="w-full h-auto flex items-center justify-center gap-[2vw]"
          >
            {PcCardContentExplore.map(
              (value: IPcContentCardProps, index: number) => {
                return (
                  <PcContentCardBig
                    key={index}
                    image={value.image}
                    title={value.title}
                    description={value.description}
                    buttonName={value.buttonName}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
