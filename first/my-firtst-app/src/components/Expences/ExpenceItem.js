import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenceCal from "./ExpenceCal";
import Card from "../UI/Card";

function ExpenceItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Chnaged!");
  };

  return (
    <Card className="expense-item">
      <ExpenceCal date={props.date}></ExpenceCal>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenceItem;
