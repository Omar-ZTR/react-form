import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* Expense date */}
      <ExpenseDate date={props.expense.date} />
      {/* Expense Description */}
      <div className="expense-item__description">
        {/* Expense Title */}
        <h2>{props.expense.title}</h2>
        {/* Expense Price */}
        <div className="expense-item__price">$ {props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
