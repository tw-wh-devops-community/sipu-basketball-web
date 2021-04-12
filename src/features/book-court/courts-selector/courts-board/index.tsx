import React from 'react';
import { Empty } from 'antd';
import { useTypedSelector } from '../../../../app/hooks/useTypedSelector';
import { selectCourts } from '../../bookCourtsSlice';
import CourtPicker from './CourtPicker';

const CourtsBoard:React.FC = () => {
  const { searchedCourts } = useTypedSelector(selectCourts);

  return (
    <div className="courts-board">
      {
          searchedCourts && Object.keys(searchedCourts.courts)
            .map((courtName) => (
              <CourtPicker
                key={courtName}
                courtName={courtName}
                courts={searchedCourts.courts[courtName]}
              />
            ))
        }
      {!searchedCourts && <Empty />}
    </div>
  );
};

export default CourtsBoard;
