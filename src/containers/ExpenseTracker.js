import { useState } from "react";

import { ExpensesFilter } from "../components/ExpenseFilter";
import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseItems } from "../components/ExpenseItems";
import { expenseData } from "../Data";

export const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(expenseData);

  const [filteredYear, setFilteredYear] = useState("2019");

  const saveExpenseHandlerData = (expense) => {
    const newExpense = { id: Math.random(), ...expense };

    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenseItems = expenses.filter(
    (expenseItem) => filteredYear === expenseItem.date.getFullYear().toString()
  );

  return (
    <div>
      <ExpenseForm saveExpenseHandlerData={saveExpenseHandlerData} />
      <ExpensesFilter
        onChangeYearFilter={filteredYearHandler}
        selectedYear={filteredYear}
      />
      <ExpenseItems expenseData={filteredExpenseItems} />
    </div>
  );
};
