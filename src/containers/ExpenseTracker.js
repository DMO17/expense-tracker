import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseItems } from "../components/ExpenseItems";

export const ExpenseTracker = () => {
  return (
    <div>
      <ExpenseForm />
      <ExpenseItems />
    </div>
  );
};
