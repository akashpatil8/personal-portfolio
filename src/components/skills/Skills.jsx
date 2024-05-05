import { motion } from "framer-motion";
import { skillsData } from "../../../public/data/skillsData";
import "./skills.scss";

export default function Skills() {
  const varients = {
    initial: { translateX: -10, translateY: -10, opacity: 0 },
    final: { translateX: 0, translateY: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="skills">
      <div className="skills--container">
        <aside>
          <h2>My versatility in tech skills</h2>
          <hr />
          <p>
            Explore my diverse skill set and adaptability across various
            technologies, ensuring innovative solutions tailored to your project
            needs.
          </p>
        </aside>

        <motion.ul
          className="skill-list-container"
          initial="initial"
          whileInView="final"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
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
  const { skillName, icon } = item;
  return (
    <motion.li
      variants={variants}
      viewport={{ once: true }}
      className="skill--component"
    >
      <img src={icon} alt={skillName} />
      <span>{skillName}</span>
    </motion.li>
  );
}
