import { useState } from "react";
import NewExpence from "./components/newExpence/NewExpence";
import Expences from "./components/Expences/expences";

function App() {
  const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Chair",
      amount: 450,
      date: new Date(2023, 2, 12),
    },
  ];

  const [expensesStored, addToArray] = useState(initialExpenses);
  const [selectedYear, changeYear] = useState("2023");

  const filterStoredExpences = (year) => {
    return expensesStored.filter((e) => e.date.getFullYear() === Number(year));
  };

  const [expenses, filterExpences] = useState(
    filterStoredExpences(selectedYear)
  );

  const addExpence = (expence) => {
    addToArray((preState) => {
      return [expence, ...preState];
    });
  };

  const changeSelectedYear = (year) => {
    changeYear(year);
    filterExpences(filterStoredExpences(year));
  };

  return (
    <div>
      <NewExpence addExpence={addExpence}></NewExpence>
      <Expences
        data={expenses}
        changeYear={changeSelectedYear}
        selectedYear={selectedYear}
      ></Expences>
    </div>
  );
}

export default App;
