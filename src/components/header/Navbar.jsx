import { motion } from "framer-motion";
import "./navbar.scss";

const list = ["about", "services", "skills", "project", "contact"];

const varients = {
  initial: { translateY: -50, opacity: 0 },
  final: (i) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function Navbar() {
  return (
    <nav className="navbar">
      <motion.span
        className="title"
        variants={varients}
        initial="initial"
        whileInView="final"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Akash
      </motion.span>
      <ul>
        {list.map((item, i) => (
          <motion.li
            className="nav--item"
            variants={varients}
            initial="initial"
            whileInView="final"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1 }}
            custom={i}
            key={item}
            viewport={{ once: true }}
          >
            <a href={`#${item}`}>{item}</a>
            <div className="underline"></div>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
