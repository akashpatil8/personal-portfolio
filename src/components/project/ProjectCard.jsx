import { useState } from "react";
import { motion } from "framer-motion";
import "./projectCard.scss";

export default function ProjectCard({ item }) {
  const [showOverlay, setShowOverLay] = useState(false);

  const { desc, poster, title, skillIcon } = item;

  return (
    <motion.div
      onHoverStart={() => setShowOverLay(true)}
      onHoverEnd={() => setShowOverLay(false)}
      className="project--card"
    >
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overlay"
        >
          <div className="inner"></div>
          <div className="project-card-details">
            <h4>{title}</h4>
            <p className="project-card-desc">{desc}</p>
            <ul className="skills--container">
              {skillIcon.map((icon) => (
                <img src={icon} alt={icon} key={icon} />
              ))}
            </ul>
          </div>
        </motion.div>
      )}
      <img className="poster" src={poster} alt="poster" />
    </motion.div>
  );
}
