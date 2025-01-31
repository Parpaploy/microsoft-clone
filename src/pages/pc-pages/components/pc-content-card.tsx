import "./pc-content-card.css";

export interface IPcContentCardProps {
  image: string;
  title: string;
  description: string;
  buttonName: string;
}

export default function PcContentCard(props: IPcContentCardProps) {
  return (
    <>
      <div className="w-[30%] h-auto flew flex-1 flex-col bg-white pc-card">
        <div className="w-full h-auto pc-card-img">
          <img className="w-full h-auto" src={props.image} alt={props.title} />
        </div>

        <div
          style={{ padding: `7% 7% 0 7%` }}
          className="w-full h-auto gap-4 pc-card-info"
        >
          <div className="min-h-[10svh] font-medium text-[1.9vw] pc-card-title">
            {props.title}
          </div>
          <div className="text-[14px] min-h-[12svh] pc-card-title">
            {props.description}
          </div>
        </div>

        <div
          style={{ padding: `4% 7% 7% 7%` }}
          className="w-full h-auto btn-area"
        >
          <button
            style={{ padding: `8px 12px`, borderRadius: `2px` }}
            className="w-fit text-white font-medium bg-[#0167B8] pc-card-btn"
          >
            {props.buttonName}
          </button>
        </div>
      </div>
    </>
  );
}
