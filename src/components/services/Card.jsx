import assets from "../../assets";
import Button from "../Button";
import "./card.scss";

export default function Card({ service }) {
  const { title, subtitle, image } = service;

  console.log(image);
  return (
    <div className="card">
      <img src={assets[image]} alt={`${image}-img`} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Button>Check out</Button>
    </div>
  );
}
