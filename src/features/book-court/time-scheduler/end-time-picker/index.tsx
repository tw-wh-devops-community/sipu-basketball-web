import { Form, TimePicker } from 'antd';
import React from 'react';
import moment from 'moment';
import { getUnavailableEndHours } from '../utils';
import { DateType, TIME_FORMAT } from '../type';

interface EndTimePickerPickerProps {
  startTime: DateType
}

const EndTimePicker: React.FC<EndTimePickerPickerProps> = ({ startTime }) => (
  <Form.Item
    label="EndTime"
    name="endTime"
    rules={[{ required: true, message: '请选择结束时间！' }]}
    style={{ display: 'inline-block', width: '48%' }}

  >
    <TimePicker
      showNow={false}
      format={TIME_FORMAT}
      inputReadOnly
      hideDisabledOptions
      disabled={!moment.isMoment(startTime)}
      disabledHours={() => getUnavailableEndHours(startTime)}
    />
  </Form.Item>
);
export default EndTimePicker;
