import { ExpenseItem } from "./ExpenseItem";

export const ExpenseItems = ({ expenseData }) => {
  return (
    <div style={{ padding: 15, backgroundColor: "black" }}>
      {expenseData.map((each, index) => (
        <ExpenseItem {...each} key={index} />
      ))}
    </div>
  );
};
