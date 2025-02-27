import { IPcContentCardProps } from "../../../interfaces/content.interface";
import "./pc-content-card-small.css";

export default function PcContentCardSmall(props: IPcContentCardProps) {
  return (
    <>
      <div className="w-[30%] h-auto flex flex-1 flex-col bg-white pc-card">
        <div className="w-full h-auto pc-card-img">
          <img className="w-full h-auto" src={props.image} alt={props.title} />
        </div>

        <div
          style={{ padding: `7% 7% 0 7%` }}
          className="w-full h-auto gap-4 pc-card-info"
        >
          <div className="min-h-[9vw] font-medium text-[1.9vw] pc-card-title">
            {props.title}
          </div>
          <div className="text-[1.1vw] min-h-[15svh] pc-card-title">
            {props.description}
          </div>
        </div>

        <div
          style={{ padding: `0 7% 7% 7%` }}
          className="w-full h-auto btn-area"
        >
          <button
            style={{ padding: `8px 12px`, borderRadius: `2px` }}
            className="w-fit text-white text-[1.1vw] font-medium bg-[#0167B8] pc-card-btn text-left"
          >
            {props.buttonName}
          </button>
        </div>
      </div>
    </>
  );
}
