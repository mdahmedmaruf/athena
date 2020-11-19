import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import aboutCard from '../../about.data';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className="about-section pb-3">
            <Container>
                <Jumbotron className="about-header text-center bg-transparent mb-0">
                    <h1>What we do</h1>
                    <p>
                        Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.
                    </p>
                </Jumbotron>
                <Row>
                    {
                        aboutCard.map(about => (
                            <Col sm={12} md={6} lg={3} xl={3}>
                                <AboutCard about={about} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default About;