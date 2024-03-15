import { motion } from "framer-motion";

import "./social.scss";
import assets from "../../assets";

const list = ["linkedin", "github", "twitter", "instagram"];

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
          key={item}
          src={assets[item]}
          alt={`${item}-logo`}
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
