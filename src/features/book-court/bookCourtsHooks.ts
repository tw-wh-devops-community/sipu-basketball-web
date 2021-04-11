import { bindActionCreators } from 'redux';
import { useAppDispatch } from '../../app/hooks/useAppDispatch';
import { courtsActionCreators } from './bookCourtsSlice';

export const useBookCourtsActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(courtsActionCreators, dispatch);
};
