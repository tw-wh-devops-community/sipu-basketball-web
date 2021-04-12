import React from 'react';
import { Card, Divider } from 'antd';
import './index.less';

interface Props {
  courts: {
    court: string,
    subCourt: number | null,
    periodHour: number,
    amount: number
  }[]
}

const OrderDetail: React.FC<Props> = ({ courts }:Props) => (
  <Card>
    <h4>
      合计场地数：
      {courts.length}
    </h4>
    <Divider type="horizontal" />
    <table className="order-detail-table">
      <tbody>
        {courts.map((court) => (
          <tr key={court.court}>
            <td>
              场地
              {court.court}
            </td>
            <td>
              类型：
              {court.subCourt === null ? '全场' : '半场'}
            </td>
            <td>
              时长：
              {court.periodHour}
              小时
            </td>
            <td>
              ￥
              {court.amount.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

export default OrderDetail;
