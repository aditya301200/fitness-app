import "./contact.css";
import HeaderImage from "../../images/header_bg_2.jpg";
import Header from "../../components/Header";
import { MdEmail } from "react-icons/md";
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header
        title="Get In Touch"
        image={HeaderImage}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        beatae soluta natus sed, dolorum sequi.
      </Header>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:adityawebdevelop010@gmail.com"
              target="_blank"
              rel="noreferrer nooopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/aditya_das"
              target="_blank"
              rel="noreferrer nooopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+916290684317"
              target="_blank"
              rel="noreferrer nooopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
