import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Achievements.css';
const Achievements = () => {
    
    const paragraph =`It is a long established fact that a reader will be distracted by 
    the readable content of a page when looking at its layout. The 
    point of using Lorem Ipsum is that it has a more-or-less normal 
    distribution of letter. `


    return (
        <div className='our-achievements-section py-4'> 
           <Container>
               <Row>
                   <Col sm={12} md={5} lg={5} xl={5}>
                       <div className='achievement-title'>
                           <h3>Our Achievements</h3>
                           <p className='description'>{paragraph}</p>
                       </div>
                   </Col>
                   <Col sm={12} md={7} lg={7} xl={7}>
                       <div className='achievement-icons'>

                       </div>
                   </Col>
               </Row>
           </Container>
            
        </div>
    );
};

export default Achievements;
/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="221.666" height="221.666" viewBox="0 0 221.666 221.666">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#2af598"/>
      <stop offset="1" stop-color="#009efd"/>
    </linearGradient>
  </defs>
  <circle id="Ellipse_16" data-name="Ellipse 16" cx="17.5" cy="17.5" r="17.5" transform="translate(86.927 104.427) rotate(-30)" opacity="0.546" fill="url(#linear-gradient)"/>
</svg>*/
