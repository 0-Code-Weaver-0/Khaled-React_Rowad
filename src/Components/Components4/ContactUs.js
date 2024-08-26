import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
