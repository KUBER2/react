import "./ExpenseItem.css";
import ExpenceCal from "./expenceCal";

function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <ExpenceCal date={props.date}></ExpenceCal>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
