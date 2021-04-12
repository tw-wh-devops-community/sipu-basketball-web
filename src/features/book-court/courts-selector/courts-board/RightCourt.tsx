import React from 'react';
import RightCourtDisabled from '../../../../assets/RightCourtDisabled';
import RightCourtAvailable from '../../../../assets/RightCourtAvailable';
import RightCourtSelected from '../../../../assets/RightCourtSelected';
import { useBookCourtsActions } from '../../bookCourtsHooks';

interface RightCourtProps {
  id: number;
  disabled: boolean;
  selected: boolean;
}
const RightCourt: React.FC<RightCourtProps> = ({ disabled, selected, id }) => {
  const { changeSelectedSubBoard } = useBookCourtsActions();

  const handleClick = () => {
    changeSelectedSubBoard(id);
  };

  if (disabled) {
    return <RightCourtDisabled />;
  }
  return (
    <div onClick={handleClick}>
      {selected ? <RightCourtSelected /> : <RightCourtAvailable />}
    </div>
  );
};

export default RightCourt;
