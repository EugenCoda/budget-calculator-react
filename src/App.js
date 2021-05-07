import "./App.css";
import BudgetForm from "./components/BudgetForm";
import BudgetItems from "./components/BudgetItems";
import { v4 as uuidv4 } from "uuid";

function App() {
  let initialEntries = [
    { id: uuidv4(), name: "salary", amount: 1500, type: "income" },
    { id: uuidv4(), name: "rent", amount: 500, type: "expense" },
    { id: uuidv4(), name: "food", amount: 300, type: "expense" },
    { id: uuidv4(), name: "car wash", amount: 20, type: "expense" },
  ];

  let totalIncome = initialEntries
    .filter((entry) => entry.type === "income")
    .reduce((acc, curr) => acc + +curr.amount, 0);

  let totalExpenses = initialEntries
    .filter((entry) => entry.type === "expense")
    .reduce((acc, curr) => acc + +curr.amount, 0);

  return (
    <>
      <h1>Budget Calculator</h1>
      <div className="budget">
        <BudgetForm />
        <BudgetItems entries={initialEntries} />
      </div>
      <h2>Income: {totalIncome}</h2>
      <h2>Expenses: {totalExpenses}</h2>
      <h2>Balance: {totalIncome - totalExpenses}</h2>
    </>
  );
}

export default App;
