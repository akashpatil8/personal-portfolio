import Footer from "../footer/Footer";
import ContactCard from "./ContactCard";
import "./contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact--container"></div>
      <ContactCard />

      <Footer />
    </section>
  );
}
