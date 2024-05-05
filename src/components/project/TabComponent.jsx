import "./tabComponent.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import { projectData } from "../../../public/data/projectData";
import ProjectCard from "./ProjectCard";

const varients = {
  initial: { translateX: -10, translateY: -10, opacity: 0 },
  final: (i) => ({
    translateX: 0,
    translateY: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.2 * i },
  }),
};

export default function TabComponent() {
  const [tab, setTab] = useState("web");
  const { web, mobile, uiux } = projectData;

  return (
    <>
      <div className="tabs">
        <button
          onClick={() => setTab("web")}
          className="tab--button"
          style={{ backgroundColor: `${tab === "web" ? "#fadc40" : ""}` }}
        >
          Web
        </button>
        <button
          onClick={() => setTab("uiux")}
          className="tab--button"
          style={{ backgroundColor: `${tab === "uiux" ? "#fadc40" : ""}` }}
        >
          UI/UX
        </button>
        <button
          onClick={() => setTab("mobile")}
          className="tab--button"
          style={{ backgroundColor: `${tab === "mobile" ? "#fadc40" : ""}` }}
        >
          Mobile
        </button>
      </div>

      {tab === "web" && (
        <div className="tab--container">
          {web.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      )}
      {tab === "uiux" && (
        <div className="tab--container">
          {uiux.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      )}
      {tab === "mobile" && (
        <div className="tab--container">
          {mobile.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
