import { IExpense } from "../model";

export const DUMMY_EXPENSES: IExpense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date(2021, 11, 19),
  },
  {
    id: "e2",
    description: "A pair of trouses",
    amount: 89.99,
    date: new Date(2022, 0, 5),
  },
  {
    id: "e3",
    description: "Some fruits",
    amount: 10.45,
    date: new Date(2021, 11, 1),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date(2022, 1, 19),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date(2022, 1, 20),
  },
];
