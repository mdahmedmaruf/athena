import React from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import Achievements from '../Home/Achievements/Achievements';
import team from '../images/about-us.jpg';

const AboutPage = () => {
    return (
        <>
            <div className="about-page py-5">
                <Container>
                    <h1 className="page-title text-center pt-3 pb-5">About Us</h1>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                        <Jumbotron className="bg-transparent">
                            <h1>Florence <span>agency</span> </h1>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Jumbotron>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Image className="team-image" src={team} alt="bannerimage" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Achievements/>
        </>
    );
};

export default AboutPage;