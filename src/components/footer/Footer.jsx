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
        <img src="../../../public/assets/linkedin.png" alt="linkedin-icon" />
        <img src="../../../public/assets/twitter.png" alt="twitter-icon" />
        <img src="../../../public/assets/instagram.png" alt="instagram-icon" />
      </div>
    </footer>
  );
}
