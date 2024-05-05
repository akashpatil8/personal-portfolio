import { motion } from "framer-motion";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import twitter from "../../../public/assets/twitter.png";
import facebook from "../../../public/assets/facebook.png";
import "./social.scss";

const list = [
  {
    socialName: "linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/akashpatil8",
  },
  { socialName: "github", icon: github, url: "https://github.com/akashpatil8" },
  {
    socialName: "facebook",
    icon: facebook,
    url: "https://www.facebook.com/profile.php?id=100003477346289",
  },
  { socialName: "twitter", icon: twitter, url: "" },
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
        <motion.a
          key={item.socialName}
          href={item.url}
          variants={varients}
          initial="initial"
          whileInView="final"
          whileHover={{ scale: 1.2 }}
          custom={i}
          viewport={{ once: true }}
        >
          <img src={item.icon} alt={item.socialName} />
        </motion.a>
      ))}
    </div>
  );
}
