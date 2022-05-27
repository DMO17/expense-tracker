import { ExpenseItem } from "./ExpenseItem";

export const ExpenseItems = ({ expenseData }) => {
  return (
    <div style={{ padding: 15 }}>
      {expenseData.length ? (
        expenseData?.map((each, index) => <ExpenseItem {...each} key={index} />)
      ) : (
        <h4
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          NO EXPENSE ITEMS FOR THIS YEAR
        </h4>
      )}
    </div>
  );
};
