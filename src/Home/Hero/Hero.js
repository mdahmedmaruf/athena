import React from 'react';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import heroimage from '../../images/hero-img.png';

const Hero = () => {
    return (
        <div className="hero-section">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                    <Jumbotron className="bg-transparent">
                        <h1>Florence <br/> agency</h1>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p>
                            <Button variant="custom">See Pricing</Button>
                        </p>
                    </Jumbotron>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <Image src={heroimage} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;