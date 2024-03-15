import Button from "../Button";
import "./card.scss";

const imgPath = "../../../public/assets/";

export default function Card({ service }) {
  const { title, subtitle, image } = service;

  return (
    <div className="card">
      <img src={`${imgPath}${image}.png`} alt={`${image}-img`} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Button>Check out</Button>
    </div>
  );
}
