import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const [validated, setValidated] = useState(false);

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <Container fluid>
              <Row>
                <Col md={4}>this is for image</Col>
                <Col md={8}>
                  <Tilt options={{ max: 2, reset: true, scale: 1 }}>
                    <Form
                      noValidate
                      validated={validated}
                      className="contact-wrapper__email"
                      onSubmit={handleContactFormSubmit}
                      action="https://getform.io/f/035beae5-9382-41ed-8476-63d973920507"
                      method="POST"
                    >
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          size="lg"
                          placeholder="John Doe"
                          name="name"
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          size="lg"
                          placeholder="john@mail.com"
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group controlId="messages">
                        <Form.Label>Messages</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          size="lg"
                          placeholder="What do you think in your mind?"
                          name="messages"
                        />
                      </Form.Group>
                      <Button size="lg" variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Tilt>
                </Col>
              </Row>
            </Container>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
