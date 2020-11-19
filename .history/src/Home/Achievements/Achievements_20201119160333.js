import React from 'react';
import { Col, Container, Row,Image} from 'react-bootstrap';
import './Achievements.css';
import happyIcon from '../../images/happy.png';
import projectComplete from '../../images/projectComplete.png';
import achievement from '../../images/achievement.png';
import runningProject from '../../images/runningProject.png';

const Achievements = () => {
    
    const paragraph =`It is a long established fact that a reader will be distracted by 
    the readable content of a page when looking at its layout. The 
    point of using Lorem Ipsum is that it has a more-or-less normal 
    distribution of letter. `
    
    const achievements =
    [
        {_id : 1,numberOf:700,status:'Happy Client',icon:happyIcon},
        {_id :2,numberOf:140 ,status:'Project Completed',icon:projectComplete},
        {_id:3,numberOf:25,status:'Crazy Minds',icon:achievement},
        {_id:4,numberOf:75,status:'Running Project',icon:runningProject}
    ];



    return (
        <div className='our-achievements-section py-5'> 
           <Container className='mt-5 pt-5'>
               <Row>
                   <Col sm={12} md={5} lg={5} xl={5}>
                       <div className='achievement-title'>
                           <h3>Our Achievements</h3>
                           <p className='description'>{paragraph}</p>
                       </div>
                   </Col>
                   <Col sm={12} md={7} lg={7} xl={7}>
                       <div className='achievement-icons ml-5'>
                              <Container>
                                  <Row>
                                      <Col sm={12} md={6} lg={6} xl={6} className='mb-5'>
                                             <div className='d-flex'>
                                                 <div className='mr-3'>
                                                 <Image src={happyIcon} fluid/>
                                                 </div>
                                                 <div>
                                                     <h2>700+</h2>
                                                     <p>Happy Client</p>
                                                 </div>
                                             </div>
                                      </Col> 
                                      <Col sm={12} md={6} lg={6} xl={6}>
                                            <Image src={projectComplete} fluid/>
                                      </Col> 
                                      <Col sm={12} md={6} lg={6} xl={6}>
                                         <Image src={achievement} fluid/>
                                      </Col> 
                                      <Col sm={12} md={6} lg={6} xl={6}>
                                          <Image src={runningProject} fluid/>
                                      </Col> 
                                  </Row>
                              </Container>
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
