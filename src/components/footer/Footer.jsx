import assets from "../../assets";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <span>Akash Patil</span>
      <div className="terms--container">
        <h5>Terms</h5>
        <h5>Privacy</h5>
        <h5>Cookies</h5>
      </div>
      <div className="footer--social">
        <img src={assets.linkedin} alt="linkedin-icon" />
        <img src={assets.twitter} alt="twitter-icon" />
        <img src={assets.instagram} alt="instagram-icon" />
      </div>
    </footer>
  );
}
