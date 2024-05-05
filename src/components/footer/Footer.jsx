import linkedin from "../../../public/assets/linkedin.png";
import github from "../../../public/assets/github.png";
import facebook from "../../../public/assets/facebook.png";
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
        <a href="https://www.linkedin.com/in/akashpatil8">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/akashpatil8">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100003477346289">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
