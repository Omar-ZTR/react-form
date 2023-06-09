import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setisEditing(true);
  };

  const stopEditing = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
