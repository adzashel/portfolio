import { Container, Row } from "react-bootstrap";
import photo from "../assets/img/contact-img.svg";
import { ContactForm } from "../Component/ContactForm";
import ContactImg from "../Component/ContactImg";
import Swal from 'sweetalert2'

const Contact = () => {

  // handle form 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ee5d031b-9827-49b6-ab60-119440134c76");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Merci!",
        text: "Votre message a bien été envoyé",
        icon: "success"
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center contact-container">
          <ContactForm onHandleSubmit={onSubmit}  />
          <ContactImg img={photo} />
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
