import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import courtsService, { BookCourtsRequestType, CourtType, QueryType } from './service';
import { RootState } from '../../app/store';

export type Courts = {
  [key: string]: [CourtType, CourtType]
};

interface CourtsStateDataType {
  date: string,
  startTime: number,
  endTime: number,
  courts: Courts
}

export interface BookCourtsState {
  loading: boolean;
  queryCourtsError: string | undefined;
  bookCourtsError: string | undefined;
  searchedCourts: CourtsStateDataType | undefined;
  selectedCourts: number[],
  bookCourtsOrder: {
    orderId: number;
  } | undefined
}

export const initialState: BookCourtsState = {
  loading: false,
  queryCourtsError: undefined,
  bookCourtsError: undefined,
  searchedCourts: undefined,
  selectedCourts: [],
  bookCourtsOrder: undefined,
};

const queryCourts = createAsyncThunk('courts/queryCourts', async (query: QueryType) => courtsService.queryCourts(query));

const bookCourts = createAsyncThunk('courts/bookCourts', async (body: BookCourtsRequestType) => courtsService.bookCourts(body));

export const bookCourtsSlice = createSlice({
  name: 'bookCourtsState',
  initialState,
  reducers: {
    changeSelectedSubBoard: (state, action:PayloadAction<number>) => {
      if (state.selectedCourts.includes(action.payload)) {
        state.selectedCourts = state.selectedCourts.filter((courtId) => courtId !== action.payload);
      } else {
        state.selectedCourts.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(queryCourts.pending, (state) => {
        state.loading = true;
        state.queryCourtsError = undefined;
        state.searchedCourts = undefined;
      })
      .addCase(queryCourts.fulfilled, (state, action) => {
        state.loading = false;
        state.queryCourtsError = undefined;
        const { courts } = action.payload;
        const data: any = {};
        courts.forEach((court) => {
          if (!data[court.court]) {
            data[court.court] = [];
          }
          data[court.court].push(court);
        });

        state.searchedCourts = { ...action.payload, courts: data };
      })
      .addCase(queryCourts.rejected, (state, action) => {
        state.loading = false;
        state.queryCourtsError = action.error.message;
        state.searchedCourts = undefined;
      })
      .addCase(bookCourts.pending, (state) => {
        state.loading = true;
        state.bookCourtsError = undefined;
        state.bookCourtsOrder = undefined;
      })
      .addCase(bookCourts.fulfilled, (state, action) => {
        state.loading = false;
        state.queryCourtsError = undefined;
        // @ts-ignore
        state.bookCourtsOrder = action.payload;
      })
      .addCase(bookCourts.rejected, (state, action) => {
        state.loading = false;
        state.bookCourtsError = action.error.message;
        state.bookCourtsOrder = undefined;
      });
  },
});

export const courtsActionCreators = {
  queryCourts,
  bookCourts,
  changeSelectedSubBoard: bookCourtsSlice.actions.changeSelectedSubBoard,
};

export const selectCourts = (state: RootState) => state.bookCourtsState;

export default bookCourtsSlice.reducer;
