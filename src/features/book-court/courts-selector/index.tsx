import React from 'react';
import Header from './Header';
import Description from './Description';
import CourtsBoard from './courts-board';

const CourtSelector: React.FC = () => (
  <div className="courts-elector">
    <Header />
    <Description />
    <CourtsBoard />
    {/* <Confirmbutton/> */}
  </div>
);

export default CourtSelector;
