import { motion } from "framer-motion";
import { servicesData } from "../../../public/data/servicesData";
import Card from "./Card";
import "./services.scss";

export default function Services() {
  const varients = {
    initial: { opacity: 0, scale: 0.8, y: -12 },
    final: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 * i },
    }),
  };

  return (
    <section id="services" className="services">
      <h2>Innovate with my Services</h2>
      <hr />
      <p className="services-subheading">
        Elevate your projects with my tailored solutions and expertise. From
        captivating front-end designs to seamless user experiences, let&apos;s
        bring your ideas to life.
      </p>
      <div className="card--container">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.id}
            variants={varients}
            initial="initial"
            whileInView="final"
            custom={i}
          >
            <Card service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
