import React from 'react';
import { Result } from 'antd';
import './index.less';

const OrderResult: React.FC = () => (
  <div className="order-result-layout">
    <Result
      status="success"
      title="预订成功"
      subTitle="请按预定时间前往篮球场"
    />
  </div>
);

export default OrderResult;
