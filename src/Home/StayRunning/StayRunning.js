import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import projectWork from '../../images/wokingProjct.png';
import './StayRunning.css';
const StayRunning = () => {

    const paragraph = `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letter.`;


    return (
        <div className='stay-running-project-section py-5'>
            <Container>
                <Row>
                    <Col className="desktop-image" sm={12} md={6} lg={6} xl={6}>
                      <Image src={projectWork} fluid/>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                         <div className='intro-section'>
                              <h1 className='running-title'>Stay Running &amp; Project</h1>
                              <p className='description mt-4 mb-5'>{paragraph}</p>
                              <Button variant="custom">Contact us</Button>
                         </div>
                    </Col>
                    <Col className="mobile-image" sm={12} md={6} lg={6} xl={6}>
                      <Image src={projectWork} fluid/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StayRunning;