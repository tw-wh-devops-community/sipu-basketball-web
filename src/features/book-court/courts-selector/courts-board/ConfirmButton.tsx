import React from 'react';
import { Button } from 'antd';

interface ConfirmButtonProps {
  onSubmit: React.MouseEventHandler<HTMLElement>;
}
const ConfirmButton:React.FC<ConfirmButtonProps> = ({ onSubmit }) => (
  <div>
    <Button type="primary" block onClick={onSubmit}>确认场地</Button>
  </div>
);
export default ConfirmButton;
