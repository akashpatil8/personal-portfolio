import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabComponent.scss";
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
  const { web, mobile, uiux } = projectData;

  return (
    <Tabs>
      <TabList>
        <Tab>Web</Tab>
        <Tab>UI/UX</Tab>
        <Tab>Mobile</Tab>
      </TabList>

      <TabPanel>
        <div className="tab-card-container">
          {web.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="tab-card-container">
          {uiux.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="tab-card-container">
          {mobile.map((item, i) => (
            <motion.div
              key={item.id}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={i + 1}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
}
