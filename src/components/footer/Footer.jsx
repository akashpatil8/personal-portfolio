import linkedin from "../../../public/assets/linkedin.png";
import twitter from "../../../public/assets/twitter.png";
import instagram from "../../../public/assets/instagram.png";
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
        <img src={linkedin} alt="linkedin-icon" />
        <img src={twitter} alt="twitter-icon" />
        <img src={instagram} alt="instagram-icon" />
      </div>
    </footer>
  );
}
