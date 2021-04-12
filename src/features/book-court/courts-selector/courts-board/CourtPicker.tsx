import React from 'react';
import { CourtSubType, CourtType } from '../../service';
import LeftCourt from './LeftCourt';
import RightCourt from './RightCourt';
import { useTypedSelector } from '../../../../app/hooks/useTypedSelector';
import { selectCourts } from '../../bookCourtsSlice';

interface CourtPickerProps {
  courtName: string;
  courts: [CourtType, CourtType]
}

const CourtPicker:React.FC<CourtPickerProps> = ({ courtName, courts }) => {
  const { selectedCourts } = useTypedSelector(selectCourts);

  return (
    <div className="court-picker">
      <h4>{courtName}</h4>
      <LeftCourt
        id={courts[CourtSubType.LEFT].id}
        disabled={!courts[CourtSubType.LEFT].isAvailable}
        selected={selectedCourts.includes(courts[CourtSubType.LEFT].id)}
      />
      <RightCourt
        id={courts[CourtSubType.RIGHT].id}
        disabled={!courts[CourtSubType.RIGHT].isAvailable}
        selected={selectedCourts.includes(courts[CourtSubType.RIGHT].id)}
      />
    </div>
  );
};

export default CourtPicker;
