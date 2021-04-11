import React from 'react';
import Index from './header';
import TimeScheduler from './time-scheduler';
import CourtSelector from './courts-selector';

const BookCourt: React.FC = () => (
  <div className="book-court-layout">
    <Index />
    <TimeScheduler />
    <CourtSelector />
  </div>
);

export default BookCourt;
