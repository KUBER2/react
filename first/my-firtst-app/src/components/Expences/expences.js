import "./expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpencesFilter";
import { useState } from "react";

function Expences(props) {
  const [selectedYear, changeYear] = useState("2023");

  const expencesList = props.data.map((exp) => {
    return (
      <ExpenceItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      ></ExpenceItem>
    );
  });

  const yearSelected = (year) => {
    changeYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card>
        <div>Selected year: {selectedYear}</div>
        <ExpensesFilter onYearSeceltion={yearSelected}></ExpensesFilter>
      </Card>
      <Card className="expenses">{expencesList}</Card>
    </div>
  );
}

export default Expences;
