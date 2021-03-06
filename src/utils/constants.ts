export type Status = 'FINISHED' | 'ONGOING' | 'NOT_STARTED';

export const initStar = [false, false, false, false, false];

export const tagStates = ['To Do', 'In Progress', 'Complete'];

export const FILTER_DROPDOWN_ITEMS = [
  {
    id: 1,
    title: '생성일',
    value: 'createAt',
  },
  {
    id: 2,
    title: '중요도',
    value: 'importance',
  },
  {
    id: 3,
    title: '생성자',
    value: 'writer',
  },
];

export const DATE_FORM: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};

export const TIME_FORM: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
};
