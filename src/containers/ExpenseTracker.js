import { ExpenseItem } from "../components/ExpenseItem";

export const ExpenseTracker = () => {
  const list = [
    { date: new Date(2020, 0, 14), title: "Car Insurance", amount: "£294.65" },
    { date: new Date(2020, 6, 14), title: "Car Insurance", amount: "£294.654" },
    { date: new Date(2020, 2, 14), title: "Car Insurance", amount: "£294.656" },
    {
      date: new Date(2020, 11, 14),
      title: "Car Insurance",
      amount: "£294.658",
    },
  ];
  return (
    <div>
      {list.map((each, index) => (
        <ExpenseItem {...each} key={index} />
      ))}
    </div>
  );
};
