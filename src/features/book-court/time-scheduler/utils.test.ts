import moment from 'moment';
import {
  isUnavailableDate,
  getUnavailableEndHours,
  getUnavailableStartHours,
  getTotalHoursOfDay,
} from './utils';

describe('test utils', () => {
  describe('test isUnavailableDate utils', () => {
    it('should return ture when call isUnavailableDate given day before today', () => {
      expect(isUnavailableDate(moment().subtract(1, 'days'))).toBe(true);
      expect(isUnavailableDate(moment().subtract(2, 'days'))).toBe(true);
    });

    it('should return false when call isUnavailableDate given day is today or after today', () => {
      expect(isUnavailableDate(moment())).toBe(false);
      expect(isUnavailableDate(moment().add(1, 'days'))).toBe(false);
    });
  });

  describe('test getTotalHoursOfDay utils', () => {
    it('should return 0-23 number array when getTotalHoursOfDay', () => {
      expect(getTotalHoursOfDay()).toStrictEqual(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      );
    });
  });

  describe('test getUnavailableStartHours utils', () => {
    it('should return numbers array of a day except 9-22 when getUnavailableStartHours given date is after today', () => {
      expect(getUnavailableStartHours(moment().hour(21), moment().add(1, 'days'))).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]);
      expect(getUnavailableStartHours(moment().hour(10), moment().add(1, 'days'))).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]);
    });

    it('should return numbers array of a day except 9-22 when getUnavailableStartHours given date is today, time is before on work time', () => {
      expect(getUnavailableStartHours(moment().hour(7), moment()))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]);
      expect(getUnavailableStartHours(moment().hour(8), moment()))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]);
    });

    it('should return correct numbers array when getUnavailableStartHours given date is today, start date is after on work time', () => {
      expect(getUnavailableStartHours(moment().hour(15), moment()))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23]);
      expect(getUnavailableStartHours(moment().hour(10), moment()))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23]);
    });

    it('should return total array when getUnavailableStartHours given date is today, start date is after 21', () => {
      expect(getUnavailableStartHours(moment().hour(22), moment()))
        .toStrictEqual(getTotalHoursOfDay());
      expect(getUnavailableStartHours(moment().hour(21), moment()))
        .toStrictEqual(getTotalHoursOfDay());
    });
  });

  describe('test getUnavailableEndHours utils', () => {
    it('should return correct hours array when given start time is before off-work-time ', () => {
      expect(getUnavailableEndHours(moment().hour(10)))
        .toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23]);
    });

    it('should return total day hours when given start time is more than 21', () => {
      expect(getUnavailableEndHours(moment().hour(22)))
        .toStrictEqual(getTotalHoursOfDay());
    });
  });
});
