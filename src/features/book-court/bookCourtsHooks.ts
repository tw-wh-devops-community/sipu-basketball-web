import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks/useAppDispatch';
import { courtsActionCreators, selectCourts } from './bookCourtsSlice';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';

export const useBookCourtsActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(courtsActionCreators, dispatch);
};

export const useHandelResponse = () => {
  const history = useHistory();
  const { bookCourtsOrder, queryCourtsError, bookCourtsError } = useTypedSelector(selectCourts);

  useEffect(() => {
    if (queryCourtsError) {
      notification.error({
        message: '查询错误',
        description: queryCourtsError,
      });
    }
    if (bookCourtsError) {
      notification.error({
        message: '定场错误',
        description: bookCourtsError,
      });
    }
    if (bookCourtsOrder) {
      history.push(`/order-confirmation/${bookCourtsOrder.orderId}`);
    }
  }, [history, queryCourtsError, bookCourtsError, bookCourtsOrder]);
};
