import { DatePicker, Form } from 'antd';
import React from 'react';
import { isUnavailableDate } from '../utils';

const DayPicker: React.FC = () => (
  <Form.Item
    label="Date"
    name="date"
    rules={[{ required: true, message: '请选择日期！' }]}
  >
    <DatePicker
      allowClear={false}
      disabledDate={isUnavailableDate}
    />
  </Form.Item>
);
export default DayPicker;
