import "./expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";

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

  return <Card className="expenses">{expencesList}</Card>;
}

export default Expences;
