import { ExpenseItem } from "./ExpenseItem";

export const ExpenseItems = ({ expenseData }) => {
  return (
    <>
      {expenseData.map((each, index) => (
        <ExpenseItem {...each} key={index} />
      ))}
    </>
  );
};
