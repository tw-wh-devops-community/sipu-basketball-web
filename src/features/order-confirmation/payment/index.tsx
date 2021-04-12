import React from 'react';
import './index.less';
import { Card, Divider } from 'antd';
// import CouponPopup from '../coupon-popup';

interface Props {
  originalAmount: number,
  timeDiscount: number,
  couponDiscount: number,
  amount: number,
}

const Payment: React.FC<Props> = ({
  originalAmount, timeDiscount, couponDiscount, amount,
}:Props) => (
  <div className="amount-payment">
    <div>
      <span>预约订单</span>
    </div>
    <Card>
      <div className="total-amount">
        <span>总金额</span>
        <span>
          ￥
          { originalAmount.toFixed(2) }
        </span>
      </div>
      <Divider type="horizontal" />
      <ul>
        <li>
          <span>预定时长优惠</span>
          <span>
            -￥
            { Math.abs(timeDiscount).toFixed(2) }
          </span>
        </li>
        <li>
          <span>优惠券</span>
          <span>
            -￥
            { Math.abs(couponDiscount) }
          </span>
        </li>
      </ul>
      <div className="total-amount">
        <span>总金额</span>
        <span>
          ￥
          { amount }
        </span>
      </div>
    </Card>
  </div>
);

export default Payment;
