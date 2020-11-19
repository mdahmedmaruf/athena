import React from 'react';
import { Card } from 'react-bootstrap';

const AboutCard = ({ about }) => {
  return (
    <Card className="about-card text-center border-0 bg-transparent my-3 py-4">
      <div className="about-card-image">
        <Card.Img src={about.image} alt="cardImage" fluid />
      </div>
      <Card.Body>
        <Card.Title as="p"><strong>{about.name}</strong></Card.Title>
        <Card.Text as="p"> {about.description} </Card.Text>
    </Card.Body>
    </Card>
  );
};

export default AboutCard;