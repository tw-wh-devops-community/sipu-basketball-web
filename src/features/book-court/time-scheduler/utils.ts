import moment, { Moment } from 'moment';
import { DateType } from './type';

const ON_WORK_HOUR = 9;
const OFF_WORK_HOUR = 22;
const LAST_HOUR_OF_DAY = 24;

export function isUnavailableDate(current: Moment): boolean {
  return current && current < moment().subtract(1, 'days').endOf('day');
}

function generateArray(start: number, end: number) {
  if (start > end) {
    return [];
  }
  return Array.from(new Array(end + 1).keys()).slice(start);
}

function getNextHour(currentHour: number) {
  return currentHour + 1;
}

function getAvailableHours(current?: Moment): number[] {
  const nextHour = current ? getNextHour(current.get('hour')) : ON_WORK_HOUR;
  const startHour: number = nextHour >= ON_WORK_HOUR ? nextHour : ON_WORK_HOUR;
  return generateArray(startHour, OFF_WORK_HOUR);
}

export function getTotalHoursOfDay(): number[] {
  return Array.from(Array(LAST_HOUR_OF_DAY).keys());
}

function isToday(date: DateType) {
  return moment().isSame(date, 'day');
}

export function getUnavailableStartHours(current: Moment, date: DateType): number[] {
  const totalHours: number[] = getTotalHoursOfDay();
  const availableHour = isToday(date) ? getAvailableHours(current) : getAvailableHours();

  return totalHours.filter((hour) => !availableHour.includes(hour) || hour === OFF_WORK_HOUR);
}

export function getUnavailableEndHours(startTime: DateType): number[] {
  const totalHours: number[] = getTotalHoursOfDay();
  const availableHour = startTime ? getAvailableHours(startTime) : totalHours;
  return totalHours.filter((hour) => !availableHour.includes(hour));
}
