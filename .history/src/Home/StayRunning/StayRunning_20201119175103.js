import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import projectWork from '../../images/wokingProjct.png';
import Achievements from '../Achievements/Achievements';
import './StayRunning.css'
const StayRunning = () => {
   
    const paragraph = `It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of using 
    Lorem Ipsum is that it has a more-or-less normal distribution of letter.`;


    return (
        <div className='stay-running-project-section'>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <Image src={projectWork} fluid/> 
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                         <div className='intro-section'>
                              <p className='running-title'>Stay Running &amp; Project</p>
                              <p className='description'>{paragraph}</p>
                              <Button variant="custom">Contact us</Button>
                         </div>
                    </Col>
                </Row>
            </Container>
          <Achievements></Achievements>
        </div>
    );
};

export default StayRunning;