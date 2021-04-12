import React from 'react';
import { Button } from 'antd';
import './index.less';

const ButtonContainer: React.FC = () => {
  const onCancel = () => {
    window.location.assign('/book-court');
  };
  const onConfirm = () => {
    window.location.assign('/order-result');
  };
  return (
    <div className="button-container-layout">
      <Button size="large" onClick={onCancel}>取消</Button>
      <Button size="large" type="primary" onClick={onConfirm}>确认预定</Button>
    </div>
  );
};

export default ButtonContainer;
