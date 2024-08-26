import React from 'react';
import { Tabs, Tab, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div>
      <h2>Help Center</h2>
      <Card className="mb-4">
        <Card.Body>
          <Tabs defaultActiveKey="faq" id="help-center-tabs">
            <Tab eventKey="faq" title="FAQ">
              <Card.Text>
                <h4>Frequently Asked Questions</h4>
                <p>Here you can find answers to the most common questions.</p>
              </Card.Text>
            </Tab>
            <Tab eventKey="contact" title="Contact Us">
              <Card.Text>
                <h4>Contact Us</h4>
                <p>If you have any questions, feel free to reach out!</p>
                <Link to="/contact">
                  <Button variant="primary">Contact Us</Button>
                </Link>
              </Card.Text>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HelpCenter;

