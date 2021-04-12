import React from 'react';
import OrderDetail from './order-detail';
import Payment from './payment';
import ButtonContainer from './button-container';
import './index.less';

const OrderConfirmation: React.FC = () => (
  <div className="order-confirmation-layout">
    <div className="order-confirmation-content">
      <OrderDetail />
      <Payment />
    </div>
    <ButtonContainer />
  </div>
);

export default OrderConfirmation;
