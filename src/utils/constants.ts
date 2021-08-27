export type Status = 'FINISHED' | 'ONGOING' | 'NOT_STARTED';

export const initStar = [false, false, false, false, false];

export const tagStates = ['To Do', 'In Progress', 'Complete'];

export const FILTER_DROPDOWN_ITEMS = [
  {
    id: 1,
    title: '생성일',
    value: 'crateAt',
  },
  {
    id: 2,
    title: '중요도',
    value: 'importance',
  },
  {
    id: 3,
    title: '생성자',
    value: 'creator',
  },
];
