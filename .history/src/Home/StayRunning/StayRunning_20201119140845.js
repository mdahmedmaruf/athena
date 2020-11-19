import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import projectWork from '../../images/wokingProjct.png';
const StayRunning = () => {
    return (
        <div classNam='stay-running-project-section py-3'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <Image src={projectWork} fluid/> 
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                           
                       <p>It is a long established fact that a reader will be distracted by the readable <br/>
                        content of a page when looking at its layout. The point of using Lorem Ipsum <br/> 
                        is that it has a more-or-less normal distribution of letter.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StayRunning;