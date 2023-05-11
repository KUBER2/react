import "./NewExpence.css";

import NewExpenceForm from "./NewExpenceForm";
const NewExpence = (props) => {
  function saveExpence(data) {
    const res = {
      ...data,
      id: Math.random().toString,
    };
    props.addExpence(res);
  }

  return (
    <div className="new-expense">
      New Expence
      <NewExpenceForm onSaveExpence={saveExpence}></NewExpenceForm>
    </div>
  );
};

export default NewExpence;
