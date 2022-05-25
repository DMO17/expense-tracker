import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseItems } from "../components/ExpenseItems";

export const ExpenseTracker = () => {
  let data = [
    {
      id: 1,
      date: new Date(2020, 0, 14),
      title: "Car Insurance",
      amount: "£294.658",
    },
    {
      id: 2,
      date: new Date(2020, 6, 14),
      title: "Car Insurance",
      amount: "£294.654",
    },
    {
      id: 3,
      date: new Date(2020, 2, 14),
      title: "Car Insurance",
      amount: "£264.656",
    },
    {
      id: 4,
      date: new Date(2020, 11, 14),
      title: "Car Insurance",
      amount: "£294.658",
    },
  ];

  const saveExpenseHandlerData = (expenses) => {
    const expenseData = [{ id: Math.random.toString(), ...expenses }, ...data];

    console.log(expenseData);
  };
  return (
    <div>
      <ExpenseForm saveExpenseHandlerData={saveExpenseHandlerData} />
      <ExpenseItems expenseData={data} />
    </div>
  );
};
