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
                   <Col sm={12} md={4} lg={4} xl={4}>
                       <div className='achievement-title'>
                           <h3>Our Achievements</h3>
                           
                       </div>
                   </Col>
                   <Col sm={12} md={8} lg={8} xl={8}>
                   
                   </Col>
               </Row>
           </Container>
            
        </div>
    );
};

export default Achievements;