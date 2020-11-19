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
                                         <div className='d-flex achievements-col'>
                                             <div>
                                                <Image src={happyIcon} className='icons' fluid></Image>
                                             </div>
                                             <div className='ml-3'>
                                                  <h2 className='text-white'><strong>700+</strong></h2>
                                                   <p className='text-white'>Happy Client</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6}>
                                         <div className='d-flex achievements-col-1'>
                                             <div>
                                                <Image src={projectComplete} className='icons-1' fluid></Image>
                                             </div>
                                             <div className='ml-3'>
                                                  <h2 className='text-white'><strong>140+</strong></h2>
                                                   <p className='text-white'>Project Completed</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6}>
                                         <div className='d-flex achievements-col-2'>
                                             <div>
                                                <Image src={achievement} className='icons-2' fluid></Image>
                                             </div>
                                             <div className='ml-3'>
                                                  <h2 className='text-white'><strong>25+</strong></h2>
                                                   <p className='text-white'>Crazy Minds</p>
                                             </div>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={6} lg={6} xl={6}>
                                         <div className='d-flex achievements-col-3'>
                                             <div>
                                                <Image src={runningProject} className='icons-3' fluid></Image>
                                             </div>
                                             <div className='ml-3'>
                                                  <h2 className='running-projects'><strong>75+</strong></h2>
                                                   <p className='text-white'>Running Project</p>
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
