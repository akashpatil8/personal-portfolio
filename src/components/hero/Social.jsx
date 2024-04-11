import { motion } from "framer-motion";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import twitter from "../../../public/assets/twitter.png";
import instagram from "../../../public/assets/instagram.png";
import "./social.scss";

const list = [
  { socialName: "linkedin", icon: linkedin },
  { socialName: "github", icon: github },
  { socialName: "twitter", icon: twitter },
  { socialName: "instagram", icon: instagram },
];

const varients = {
  initial: { translateX: -50, opacity: 0 },
  final: (i) => ({
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2 * i },
  }),
};

export default function Social() {
  return (
    <div className="social">
      {list.map((item, i) => (
        <motion.img
          key={item.socialName}
          src={item.icon}
          alt={item.socialName}
          variants={varients}
          initial="initial"
          whileInView="final"
          whileHover={{ scale: 1.2 }}
          custom={i}
        />
      ))}
    </div>
  );
}
