import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [titleIsValid, settitleIsValid] = useState(true);
  const titleHandler = (event) => {
    setExpense({ ...expense, title: event.target.value });
  };

  const amountHandler = (event) => {
    setExpense({ ...expense, amount: event.target.value });
  };

  const dateHandler = (event) => {
    setExpense({ ...expense, date: event.target.value });
  };

  const submitExpense = (event) => {
    event.preventDefault();
    if (expense.title.trim() === "") {
      settitleIsValid(false);
      return;
    }
    console.log(expense.date);
    const newExpense = {
      ...expense,
      amount: Number(expense.amount),
      date: new Date(expense.date),
    };
    console.log(newExpense);
    props.onSaveExpense(newExpense);
    // Two-way binding
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{ color: titleIsValid ? "black" : "red" }}>Title</label>
          <input type="text" value={expense.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            nim="0.01"
            step="0.01"
            value={expense.amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={expense.date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitExpense}>
          Add Expense
        </button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
