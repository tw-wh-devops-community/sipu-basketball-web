import React from 'react';
import Header from './Header';
import Description from './Description';
import CourtsBoard from './courts-board';
import ConfirmButton from './courts-board/ConfirmButton';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { selectCourts } from '../bookCourtsSlice';
import { useBookCourtsActions } from '../bookCourtsHooks';

const CourtSelector: React.FC = () => {
  const { searchedCourts, selectedCourts } = useTypedSelector(selectCourts);

  const { bookCourts } = useBookCourtsActions();

  const onSubmit = () => {
    if (searchedCourts && selectedCourts.length > 0) {
      const { date, startTime, endTime } = searchedCourts;
      const body = {
        date,
        startTime,
        endTime,
        selectedCourts,
      };
      bookCourts(body);
    }
  };

  return (
    <div className="courts-elector">
      <Header />
      <Description />
      <CourtsBoard />
      <ConfirmButton onSubmit={onSubmit} />
    </div>
  );
};

export default CourtSelector;
