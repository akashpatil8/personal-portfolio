import { motion } from "framer-motion";
import Button from "../Button";
import "./contactCard.scss";
import assets from "../../assets";

const data = [
  { title: "Address", subtitle: "Bangalore, India", icon: "location" },
  { title: "Phone", subtitle: "+91 8806666249", icon: "phone" },
  { title: "Mail", subtitle: "akashpatil4659@gmail.com", icon: "email" },
];

const varients = {
  initial: { translateY: -30, opacity: 0 },
  final: (i) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i },
  }),
};

export default function ContactCard() {
  return (
    <motion.div
      className="contact--card"
      initial={{ translateY: 50 }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <motion.div
        className="contact-card-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <form action="submit">
          <label htmlFor="name">Name :</label>
          <div>
            <input type="text" id="name" />
          </div>
          <label htmlFor="email">Email :</label>
          <div>
            <input type="email" id="email" />
          </div>
          <label htmlFor="subject">Subject :</label>
          <div>
            <input type="text" id="subject" />
          </div>
          <label htmlFor="description">Description :</label>
          <div>
            <textarea type="text" id="subject" rows={4} />
          </div>
        </form>
        <Button>Submit</Button>
      </motion.div>
      <div className="contact-card-details">
        <div>
          <motion.h2
            variants={varients}
            initial="initial"
            whileInView="final"
            custom={1}
          >
            Reach me here
          </motion.h2>
          <motion.hr
            variants={varients}
            initial="initial"
            whileInView="final"
            custom={1.3}
          />
        </div>
        <motion.p
          variants={varients}
          initial="initial"
          whileInView="final"
          custom={1.6}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          atque velit doloribus accusantium obcaecati quis error omnis sequi
        </motion.p>
        <ul>
          {data.map((item, i) => (
            <motion.li
              key={item.title}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={1.6 + i * 0.3}
            >
              <div className="img--container">
                <img src={assets[item.icon]} alt={item.icon} />
              </div>
              <div>
                <span>{item.title}</span>
                <p>{item.subtitle}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
