import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container>
      <h1 className="page-title text-center py-5">Contact Us</h1>
      <Form className="contact-from my-5">
        <Form.Group>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" placeholder="Message" rows="4" />
        </Form.Group>

        <Button variant="btn btn-custom" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;