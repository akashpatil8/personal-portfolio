import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../Button";
import Header from "../header/Header";
import "./hero.scss";
import Social from "./Social";
import assets from "../../assets";

const imgPath = "public/assets/";

const varients = {
  initial: { opacity: 0, translateY: -20 },
  final: (num) => ({
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.6 + num, delay: 0.4 + num },
  }),
};

export default function Hero() {
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
            >
              {"I'm"} <span>Akash</span>,
            </motion.h1>

            <motion.div
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={0.6}
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
            >
              Crafting immersive digital experiences for 1.4 years. Proficient
              in <span className="react">React</span>,{" "}
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
            >
              <Button>Download CV</Button>
              <Button type="border">Contact me</Button>
            </motion.div>
          </div>
          <div className="hero--image">
            <motion.div
              className="img--container"
              initial={{ scale: 0.7, translateY: 10 }}
              whileInView={{ scale: 1, translateY: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                // src={`${imgPath}profile-img.png`}
                src={assets.figma}
                alt="profile-img"
                initial={{ scale: 0.8, opacity: 0, translateY: 50 }}
                whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
