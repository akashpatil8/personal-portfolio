import { motion } from "framer-motion";
import { skillsData } from "../../../public/data/skillsData";
import "./skills.scss";
import assets from "../../assets";

export default function Skills() {
  const varients = {
    initial: { translateX: -10, translateY: -10, opacity: 0 },
    final: { translateX: 0, translateY: 0, opacity: 1 },
  };

  return (
    <section className="skills">
      <div className="skills--container">
        <aside>
          <h2>My versatility in tech skills</h2>
          <hr />
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco
          </p>
        </aside>

        <motion.ul
          className="skill-list-container"
          initial="initial"
          whileInView="final"
          transition={{ staggerChildren: 0.1 }}
        >
          {skillsData.map((item) => (
            <SkillComponent variants={varients} key={item} item={item} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function SkillComponent({ item, variants }) {
  return (
    <motion.li variants={variants} className="skill--component">
      <img src={assets[item.toLowerCase()]} alt={item.toLowerCase()} />
      <span>{item}</span>
    </motion.li>
  );
}
