import { motion } from "framer-motion";
import Button from "../Button";
import "./contactCard.scss";
import { useForm } from "react-hook-form";
import location from "../../../public/assets/location.png";
import phone from "../../../public/assets/phone.png";
import email from "../../../public/assets/email.png";

const data = [
  { title: "Address", subtitle: "Bangalore, India", icon: location },
  { title: "Phone", subtitle: "+91 8806666249", icon: phone },
  { title: "Mail", subtitle: "akashpatil4659@gmail.com", icon: email },
];

const varients = {
  initial: { translateY: -50, opacity: 0 },
  final: (i) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i },
  }),
};

export default function ContactCard() {
  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(errors);
  }

  return (
    <motion.div
      className="contact--card"
      initial={{ translateY: 50 }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="contact-card-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName">Name :</label>
          <div>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: "Name can't be empty" })}
            />
            {errors?.fullName?.message && <p>{errors.fullName.message}</p>}
          </div>
          <label htmlFor="email">Email :</label>
          <div>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email can't be empty" })}
            />
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </div>
          <label htmlFor="subject">Subject :</label>
          <div>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject can't be empty" })}
            />
            {errors?.subject?.message && <p>{errors.subject.message}</p>}
          </div>
          <label htmlFor="description">Description :</label>
          <div>
            <textarea
              type="text"
              id="description"
              {...register("description")}
            />
          </div>
          <Button btnType="submit">Submit</Button>
        </form>
      </motion.div>
      <div className="contact-card-details">
        <div>
          <motion.h2
            variants={varients}
            initial="initial"
            whileInView="final"
            custom={1}
            viewport={{ once: true }}
          >
            Reach me here
          </motion.h2>
          <motion.hr
            variants={varients}
            initial="initial"
            whileInView="final"
            custom={1.3}
            viewport={{ once: true }}
          />
        </div>
        <motion.p
          variants={varients}
          initial="initial"
          whileInView="final"
          custom={1.6}
          viewport={{ once: true }}
        >
          Let&apos;s Connect. Drop me a line for collaborations, projects, or
          just to say hello. Excited to hear from you!
        </motion.p>
        <ul>
          {data.map((item, i) => (
            <motion.li
              key={item.title}
              variants={varients}
              initial="initial"
              whileInView="final"
              custom={1.6 + i * 0.3}
              viewport={{ once: true }}
            >
              <div className="img--container">
                <img src={item.icon} alt={item.icon} />
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
