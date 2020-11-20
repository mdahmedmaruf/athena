import React from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import Achievements from '../Home/Achievements/Achievements';
import team from '../images/about-us.jpg';

const TeamPage = () => {
  return (
    <>
      <div className="team-page py-5">
        <Container>
          <h1 className="page-title text-center pt-3 pb-5">Our Team</h1>
          <Row>
          <Col className="text-center" sm={12} md={12} lg={12} xl={12}>
            <Image className="team-image" src={team} alt="team" fluid />
          </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <Jumbotron className="bg-transparent text-center">
                <h1>About Our Team</h1>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
      <Achievements/>
    </>
  );
};

export default TeamPage;