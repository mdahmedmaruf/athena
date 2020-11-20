import React from 'react';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import heroimage from '../../images/hero-img.png';
import studiobotton from '../../images/studio-1.png';

const Hero = () => {
    return (
        <div className="hero-section py-5">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                    <Jumbotron className="bg-transparent">
                        <h1>Florence <span>agency</span> </h1>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p>
                            <Link to="pricing">
                                <Button to="pricing" variant="custom">See Pricing</Button>
                            </Link>
                        </p>
                    </Jumbotron>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <Image src={heroimage} alt="bannerimage" fluid />
                    </Col>
                </Row>
            </Container>
            <div className="studio-bottom">
                <Image src={studiobotton} alt="studio" fluid/>
            </div>
        </div>
    );
};

export default Hero;