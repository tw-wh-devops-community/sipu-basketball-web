import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Payment from './index';

describe('test payment component', () => {
  it('should show correct payment amount', () => {
    // const courts = [
    //   {
    //     court: 'A',
    //     subCourt: 1,
    //     periodHour: 2,
    //     amount: 20.03,
    //   },
    // ];
    const originalAmount = 200.00;
    const timeDiscount = -80.001;
    const couponDiscount = -20.00;
    const amount = 100.00;
    const wrapper = render(<Payment
      originalAmount={originalAmount}
      timeDiscount={timeDiscount}
      couponDiscount={couponDiscount}
      amount={amount}
    />);
    expect(wrapper.container).toContainHTML('<span>-￥80.00</span>');
    // wrapper = render(<OrderDetail courts={courts} />);
    // expect(wrapper.container).toContainHTML('<td>场地A</td>');
    // expect(wrapper.container).toContainHTML('<td>类型：半场</td>');
    // expect(wrapper.container).toContainHTML('<td>时长：2小时</td>');
    // expect(wrapper.container).toContainHTML('<td>￥20.03</td>');
  });

  // it('should show correct total counts', () => {
  //   const courts = [
  //     {
  //       court: 'A',
  //       subCourt: 1,
  //       periodHour: 2,
  //       amount: 20.03,
  //     },
  //     {
  //       court: 'B',
  //       subCourt: 1,
  //       periodHour: 2,
  //       amount: 20.03,
  //     },
  //   ];
  //   const wrapper = render(<OrderDetail courts={courts} />);
  //   expect(wrapper.container).toContainHTML('<h4>合计场地数：2</h4>');
  // });
  //
  // it('should show correct court detail', () => {
  //   const courts = [
  //     {
  //       court: 'A',
  //       subCourt: 1,
  //       periodHour: 2,
  //       amount: 20.03,
  //     },
  //   ];
  //   const wrapper = render(<OrderDetail courts={courts} />);
  //   expect(wrapper.container).toContainHTML('<td>场地A</td>');
  //   expect(wrapper.container).toContainHTML('<td>类型：半场</td>');
  //   expect(wrapper.container).toContainHTML('<td>时长：2小时</td>');
  //   expect(wrapper.container).toContainHTML('<td>￥20.03</td>');
  // });
});
