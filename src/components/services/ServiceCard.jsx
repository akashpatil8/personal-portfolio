import Button from "../../ui/Button";
import "./serviceCard.scss";

export default function Card({ service }) {
  const { title, subtitle, image } = service;

  return (
    <div className="card">
      <div>
        <img src={image} alt={`${image}-img`} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <a href="#project">
        <Button>Check out</Button>
      </a>
    </div>
  );
}
