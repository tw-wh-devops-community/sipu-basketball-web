import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = _useSelector;
