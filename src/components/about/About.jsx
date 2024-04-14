import { motion } from "framer-motion";

import Button from "../Button";
import "./about.scss";
import profileImg from "../../../public/assets/profile-img.png";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about--img"
        initial={{ translateX: -100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="img-background-border">
          <motion.div
            className="img--container"
            initial={{ translateX: -33, translateY: 33 }}
            whileInView={{ translateX: 0, translateY: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <img src={profileImg} alt="profile-img" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="about--details"
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>My Coding Journey</h2>
        <hr />
        <div>
          <p>
            I&apos;m Akash, a passionate front-end developer driven by
            creativity and innovation. With 1.4 years of experience, I&apos;ve
            mastered technologies like React, HTML, CSS, and JavaScript,
            crafting immersive digital experiences that captivate audiences.
          </p>
          <p>
            My passion for UI/UX design shines through in every project,
            blending creativity with functionality using tools like Figma and
            Canva. Proficient in Git and GitHub, I excel in collaborative
            environments, with backend prowess in Java, Python, and SQL.
          </p>
          <p>
            From humble beginnings to diverse projects, each step has shaped my
            expertise and fueled my passion. What sets me apart is my relentless
            pursuit of excellence and my knack for pushing boundaries.
          </p>
          <p>
            Join me on this exhilarating journey as we innovate, create, and
            redefine possibilities in the world of front-end development.
          </p>
        </div>
        {/* <p>
          <span className="p-1">
            I&apos;m Akash, a passionate front-end developer driven by
            creativity and innovation. With 1.4 years of experience, I&apos;ve
            mastered technologies like React, HTML, CSS, and JavaScript,
            crafting immersive digital experiences that captivate audiences.
          </span>
          <span className="p-2">
            My passion for UI/UX design shines through in every project,
            blending creativity with functionality using tools like Figma and
            Canva. Proficient in Git and GitHub, I excel in collaborative
            environments, with backend prowess in Java, Python, and SQL.
          </span>
          <span className="p-3">
            From humble beginnings to diverse projects, each step has shaped my
            expertise and fueled my passion. What sets me apart is my relentless
            pursuit of excellence and my knack for pushing boundaries.
          </span>
          <span className="p-4">
            Join me on this exhilarating journey as we innovate, create, and
            redefine possibilities in the world of front-end development.
          </span>
        </p> */}
        <Button type="solid">Hire Me</Button>
      </motion.div>
    </section>
  );
}
