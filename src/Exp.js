import "./Exp.css";

function Expense(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      {/* Expense date */}
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      {/* Expense Description */}
      <div className="expense-item__description">
        {/* Expense Title */}
        <h2>{props.title}</h2>
        {/* Expense Price */}
        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </div>
  );
}

export default Expense;
