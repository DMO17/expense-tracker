import { useState } from "react";
import "./style.css";

export const ExpenseForm = ({ saveExpenseHandlerData }) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const titleChangeHandler = (event) => setTitleInput(event.target.value);

  const amountChangeHandler = (event) => setAmountInput(event.target.value);

  const dateChangeHandler = (event) => setDateInput(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };

    saveExpenseHandlerData(expenseData);

    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={titleInput}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.00"
              step="0.01"
              value={amountInput}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={dateInput}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
