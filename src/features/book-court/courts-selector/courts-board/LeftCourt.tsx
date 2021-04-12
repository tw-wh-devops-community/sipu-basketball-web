import React from 'react';
import LeftCourtDisabled from '../../../../assets/LeftCourtDisabled';
import LeftCourtAvailable from '../../../../assets/LeftCourtAvailable';
import LeftCourtSelected from '../../../../assets/LeftCourtSelected';
import { useBookCourtsActions } from '../../bookCourtsHooks';

interface LeftCourtProps {
  id: number;
  disabled: boolean;
  selected: boolean;
}
const LeftCourt: React.FC<LeftCourtProps> = ({ disabled, selected, id }) => {
  const { changeSelectedSubBoard } = useBookCourtsActions();

  const handleClick = () => {
    changeSelectedSubBoard(id);
  };
  if (disabled) {
    return <LeftCourtDisabled />;
  }
  return (
    <div onClick={handleClick}>
      {selected ? <LeftCourtSelected /> : <LeftCourtAvailable />}
    </div>
  );
};

export default LeftCourt;
