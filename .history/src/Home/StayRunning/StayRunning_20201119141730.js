import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import projectWork from '../../images/wokingProjct.png';
import './StayRunning.css'
const StayRunning = () => {
    return (
        <div classNam='stay-running-project-section py-3'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <Image src={projectWork} fluid/> 
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                         <div className='intro-section'>
                              <h2>Stay Running &amp; Project</h2>
                         </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StayRunning;