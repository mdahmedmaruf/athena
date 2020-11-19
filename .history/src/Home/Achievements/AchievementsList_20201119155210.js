import React from 'react';
import { Col, Image } from 'react-bootstrap';

const AchievementsList = ({achievement}) => {
    return (
        <Col sm={12} md={6} lg={6} xl={6} className='mb-5 bg-white'>
          <div className="d-flex justify-content-center">
             <Image src={achievement.icon} fluid/>
              <div className='ml-5'>
                <h1>{achievement.numberOf}+</h1>
                 <p>{achievement.status}</p>
              </div>
          </div>
        </Col>
    );
};

export default AchievementsList;