import { HttpClient } from '../../app/http/http-client';

export interface QueryType {
  date: string | undefined,
  startTime: number | undefined,
  endTime: number | undefined
}

export enum CourtSubType {
  LEFT,
  RIGHT,
}

export interface CourtType {
  id: number,
  court: string,
  subCourt: CourtSubType,
  isAvailable: boolean
}

export interface SearchedCourtsType {
  date: string,
  startTime: number,
  endTime: number,
  courts: CourtType[]
}

export interface BookCourtsRequestType {
  date: string,
  startTime: number,
  endTime: number,
  selectedCourts: number[]
}

class BookCourtService extends HttpClient {
  async queryCourts(queryTime: QueryType): Promise<SearchedCourtsType> {
    return this.instance.get('/api/courts', { params: queryTime }).then((res) => res.data);
  }

  async bookCourts(bookCourtsBody: BookCourtsRequestType): Promise<SearchedCourtsType> {
    return this.instance.post('/api/orders', bookCourtsBody).then((res) => res.data);
  }
}

export default new BookCourtService();
