import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;
  const [validated, setValidated] = useState(false);
  const [handlerEnvelope, setHandlerEnvelope] = useState('envelope--close');

  const handleContactFormSubmit = (event) => {
    setValidated(true);

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setInterval(() => {
        setHandlerEnvelope('envelope--close');
      }, 2000);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade
          bottom
          duration={1000}
          delay={800}
          distance="30px"
          onReveal={() => {
            setTimeout(() => {
              setHandlerEnvelope('envelope--open');
            }, 1500);
          }}
        >
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <Container fluid>
              <Row className="justify-content-center">
                <Col xl={4} lg={5} md={5} sm={8}>
                  <div className="envelope-wrapper">
                    <div id="envelope" className={handlerEnvelope}>
                      <div className="front flap" />
                      <div className="front pocket" />
                      <div className="letter">
                        <div className="words line1" />
                        <div className="words line2" />
                        <div className="words line3" />
                        <div className="words line4" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={8} lg={11} md={11} sm={16}>
                  <Tilt options={{ max: 2, reset: true, scale: 1 }}>
                    <Form
                      noValidate
                      validated={validated}
                      className="contact-wrapper__email"
                      onSubmit={handleContactFormSubmit}
                      action="https://getform.io/f/035beae5-9382-41ed-8476-63d973920507"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          size="lg"
                          placeholder="Who is your name?"
                          name="name"
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          size="lg"
                          placeholder="What is your email?"
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
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
