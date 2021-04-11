import React, { useState } from 'react';
import { Form } from 'antd';
import DayPicker from './day-picker';
import StartTimePicker from './start-time-picker';
import EndTimePicker from './end-time-picker';
import { DateType } from './type';
import { useBookCourtsActions } from '../bookCourtsHooks';
import TimeIcon from '../../../assets/TimeIcon';
import ContentBox from '../../../app/components/content-box';

interface FormDataType {
  date: DateType,
  startTime: DateType,
  endTime: DateType
}

const TimeScheduler: React.FC = () => {
  const [form] = Form.useForm();
  const { queryCourts } = useBookCourtsActions();
  const [searchDate, setSearchDate] = useState<FormDataType>({
    date: undefined,
    startTime: undefined,
    endTime: undefined,
  });

  const onSearchCourts = async (values: FormDataType) => {
    queryCourts({
      date: values.date?.format('YYYY-MM-DD'),
      startTime: values.startTime?.get('hours'),
      endTime: values.endTime?.get('hours'),
    });
  };

  const onValuesChange = async (changedValues: any, allValues: FormDataType) => {
    if (changedValues.date) {
      form.setFieldsValue({ ...allValues, startTime: null, endTime: null });
      setSearchDate({ ...allValues, startTime: null, endTime: null });
    }
    if (changedValues.startTime) {
      form.setFieldsValue({ ...allValues, endTime: null });
      setSearchDate({ ...allValues, endTime: null });
    }
    if (changedValues.endTime && allValues.date && allValues.startTime && allValues.endTime) {
      await onSearchCourts(allValues);
    }
  };

  return (
    <ContentBox icon={TimeIcon} title="选择时间">
      <Form
        className="time-scheduler-form"
        form={form}
        name="search-available-courts"
        layout="horizontal"
        requiredMark={false}
        onValuesChange={onValuesChange}
      >
        <DayPicker />
        <div className="time-picker">
          <StartTimePicker date={searchDate.date} />
          <EndTimePicker startTime={searchDate.startTime} />
        </div>
      </Form>
    </ContentBox>
  );
};

export default TimeScheduler;
