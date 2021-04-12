import React from 'react';
import OrderDetail from './order-detail';
import Payment from './payment';
import ButtonContainer from './button-container';
import './index.less';

const OrderConfirmation: React.FC = () => {
  const courts = [
    {
      court: 'A',
      subCourt: 1,
      periodHour: 2,
      amount: 20.03,
    },
    {
      court: 'B',
      subCourt: 1,
      periodHour: 2,
      amount: 20.03,
    },
  ];
  return (
    <div className="order-confirmation-layout">
      <div className="order-confirmation-content">
        <OrderDetail courts={courts} />
        <Payment />
      </div>
      <ButtonContainer />
    </div>
  );
};

export default OrderConfirmation;
