import { useState } from "react";
import "./NewExpenceForm.css";

function NewExpenceForm(props) {
  const [title, changeTitle] = useState("");
  const [amount, changeAmount] = useState("");
  const [datePicked, changeDate] = useState("");
  const [isShowingForm, negateForm] = useState(false);

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
    props.onSaveExpence(data);
  };

  const onCencel = () => {
    negateForm(false);
  };
  const onAddNewExpence = () => {
    negateForm(true);
  };

  const form = (
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
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCencel}>Cencel</button>
        <button type="submit">Add expence</button>
      </div>
    </form>
  );

  const addNewExpenceButton = (
    <div className="new-expense__actions">
      <button onClick={onAddNewExpence}>Add new expence</button>
    </div>
  );

  return isShowingForm ? form : addNewExpenceButton;
}

export default NewExpenceForm;
