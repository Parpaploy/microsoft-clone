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
      <div className="w-[30%] h-[95%] bg-white pc-card">
        <div className="w-full h-[50%] pc-card-img">
          <img className="w-full h-full" src={props.image} alt={props.title} />
        </div>

        <div
          style={{ padding: `0 7%` }}
          className="w-full h-[30%] pc-card-info"
        >
          <div className="font-medium text-[2vw] pc-card-title">
            {props.title}
          </div>
          <div className="text-[1vw] pc-card-title">{props.description}</div>
        </div>

        <div
          style={{ padding: `7% 0 0 7%` }}
          className="w-full h-{25%} btn-area"
        >
          <div
            style={{ padding: `8px 12px`, borderRadius: `2px` }}
            className="w-fit text-white font-medium bg-[#0167B8] pc-card-btn"
          >
            {props.buttonName}
          </div>
        </div>
      </div>
    </>
  );
}
