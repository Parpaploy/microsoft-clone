import { PcCardContent } from "../../constants/web-content";
import PcContentCard, {
  IPcContentCardProps,
} from "./components/pc-content-card";
import "./pc-homepage.css";

export default function PcHomePage() {
  return (
    <>
      <div className="w-full min-h-[86svh] bg-black">
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
          style={{ padding: `0.7% 0.9% 5%` }}
          className="w-full h-[72.5svh] pc-bottom flex items-center justify-center gap-[2vw]"
        >
          {PcCardContent.map((value: IPcContentCardProps, index: number) => {
            return (
              <PcContentCard
                key={index}
                image={value.image}
                title={value.title}
                description={value.description}
                buttonName={value.buttonName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
