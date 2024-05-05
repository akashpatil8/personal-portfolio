import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../../ui/Button";
import Header from "../header/Header";
import "./hero.scss";
import Social from "./Social";
import profileImg from "../../../public/assets/profile-img.png";
import { getExperince } from "../../helper/getExperience";

const varients = {
  initial: { opacity: 0, translateY: -20 },
  final: (num) => ({
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.6 + num, delay: 0.4 + num },
  }),
};

export default function Hero() {
  const resumeUrl =
    "https://drive.google.com/file/d/1YMbZx9-vO8yOo-5GM_PMe7FSAG0o5ft0/view?usp=sharing";

  function handleDownloadCV() {
    window.open(resumeUrl, "_blank");
  }

  const experience = getExperince();

  return (
    <section className="hero">
      <Header />
      <div className="hero--container">
        <Social />
        <div className="hero-details-container">
          <div className="hero--details">
            <motion.div
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={0.2}
              viewport={{ once: true }}
            >
              <div className="line"></div>
              <span>Hello</span>
            </motion.div>

            <motion.h1
              className="name--title"
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={0.4}
              viewport={{ once: true }}
            >
              {"I'm"} <span>Akash</span>,
            </motion.h1>

            <motion.div
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={0.6}
              viewport={{ once: true }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-end Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Front-end Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={0.8}
              viewport={{ once: true }}
            >
              Crafting immersive digital experiences for {experience} years.
              Proficient in <span className="react">React</span>,{" "}
              <span className="html"> HTML</span>,
              <span className="css"> CSS</span>, and
              <span className="js"> JavaScript</span>. Let&apos;s collaborate
              and create something remarkable!
            </motion.p>

            <motion.div
              className="btn"
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={1}
              viewport={{ once: true }}
            >
              <Button onClick={handleDownloadCV}>Download CV</Button>

              <a href="#contact">
                <Button type="border">Contact me</Button>
              </a>
            </motion.div>
          </div>
          <div className="hero--image">
            <motion.div
              className="img--container"
              initial={{ scale: 0.7, translateY: 10 }}
              whileInView={{ scale: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={profileImg}
                alt="profile-img"
                initial={{ scale: 0.8, opacity: 0, translateY: 50 }}
                whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
