import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import OrderDetail from './order-detail';
import Payment from './payment';
import ButtonContainer from './button-container';
import './index.less';
import axios from 'axios';

interface Props {
  match:{
    params:{
      orderId: string
    }
  }
}

const OrderConfirmation: React.FC<Props> = ({ match: { params: { orderId } } }:Props) => {
  const [order, setOrder] = useState<any>(null);
  useEffect(() => {
    axios.get(`/api/orders/${orderId}`).then((res) => {
      setOrder(res.data);
    });
  }, [orderId]);

  return order ? (
    <div className="order-confirmation-layout">
      <div className="order-confirmation-content">
        <OrderDetail courts={order.courts} />
        <Payment
          originalAmount={order.originalAmount}
          timeDiscount={order.timeDiscount}
          couponDiscount={order.couponDiscount}
          amount={order.amount}
        />
      </div>
      <ButtonContainer />
    </div>
  ) : <Spin />;
};

export default OrderConfirmation;
