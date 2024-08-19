import { Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import FooterBrand from '../Component/FooterBrand';


const Footer = ({ children }) => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <FooterBrand/>
          { children }
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
