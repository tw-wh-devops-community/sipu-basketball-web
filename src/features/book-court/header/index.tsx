import React from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { selectLoginState } from '../../login/authorizeSlice';

const Header: React.FC = () => {
  const { userName } = useTypedSelector(selectLoginState);
  return (
    <div>
      <h1 className="welcome-title">
        Hi
        {userName}
      </h1>
    </div>
  );
};

export default Header;
