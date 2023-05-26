import "./expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpencesFilter";

function Expences(props) {
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
    props.changeYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter onYearSeceltion={yearSelected}></ExpensesFilter>
        </div>
        <div>{props.data.lenght === 0 ? <p>No data yet</p> : expencesList}</div>
      </Card>
    </div>
  );
}

export default Expences;
