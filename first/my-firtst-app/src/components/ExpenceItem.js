import "./ExpenseItem.css";
import ExpenceCal from "./expenceCal";

function ExpenceItem(props) {
  const date = props.date;
  const title = props.title;
  const amount = props.amount;

  return (
    <div className="expense-item">
      <ExpenceCal date={date}></ExpenceCal>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
