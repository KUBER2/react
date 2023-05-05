import "./ExpenseItem.css";
import ExpenceCal from "./ExpenceCal";
import Card from "./Card";

function ExpenceItem(props) {
  return (
    <Card className="expense-item">
      <ExpenceCal date={props.date}></ExpenceCal>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
