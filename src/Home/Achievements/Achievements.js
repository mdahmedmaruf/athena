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
    
    return (
        <div className='our-achievements-section'> 
           <Container className='mt-5 pt-5 pb-5'>
               <Row>
                   <Col sm={12} md={5} lg={5} xl={5}>
                       <div className='achievement-title pt-5 mt-3'>
                           <h3>Our Achievements</h3>
                           <p className='description'>{paragraph}</p>
                       </div>
                   </Col>
                   <Col sm={12} md={7} lg={7} xl={7}>
                       <div className='achievement-icons ml-5'>
                              <Container>
                                  <Row>
                                     <Col sm={12} md={6} lg={6} xl={6} className='mb-4'>
                                         <div className='d-flex achievements-col'>
                                             <div>
                                                <Image src={happyIcon} className='icons' fluid></Image>
                                             </div>
                                             <div className='ml-4'>
                                                  <h2><strong>700+</strong></h2>
                                                   <p>Happy Client</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6} className='mb-4'>
                                         <div className='d-flex achievements-col-1'>
                                             <div>
                                                <Image src={projectComplete} className='icons-1' fluid></Image>
                                             </div>
                                             <div className='ml-3'>
                                                  <h2><strong>140+</strong></h2>
                                                   <p>Project Completed</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6} className='mb-4'>
                                         <div className='d-flex achievements-col-2'>
                                             <div>
                                                <Image src={achievement} className='icons-2' fluid></Image>
                                             </div>
                                             <div className='ml-4'>
                                                  <h2><strong>25+</strong></h2>
                                                   <p>Crazy Minds</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6} className='mb-4'>
                                         <div className='d-flex achievements-col-3'>
                                             <div>
                                                <Image src={runningProject} className='icons-3' fluid></Image>
                                             </div>
                                             <div className='ml-4'>
                                                  <h2><strong>75+</strong></h2>
                                                   <p>Running Project</p>
                                             </div>
                                         </div>
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

