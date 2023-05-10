import { useState } from "react";
import "./NewExpenceForm.css";

function NewExpenceForm() {
  const [title, changeTitle] = useState("");
  const [amount, changeAmount] = useState("");
  const [datePicked, changeDate] = useState("");

  const titleChangeHandler = (e) => {
    changeTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    changeAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    changeDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: new Date(datePicked),
    };
    changeTitle("");
    changeAmount("");
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expence</button>
      </div>
    </form>
  );
}

export default NewExpenceForm;
