import { useState } from "react";
import "./App.css";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [entries, setEntries] = useState([
    { id: uuidv4(), name: "salary", amount: 1500, type: "income" },
    { id: uuidv4(), name: "rent", amount: 500, type: "expense" },
    { id: uuidv4(), name: "food", amount: 300, type: "expense" },
    { id: uuidv4(), name: "car wash", amount: 20, type: "expense" },
  ]);

  const [entry, setEntry] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");
  const [alert, setAlert] = useState({ show: false });

  const handleEntry = (e) => {
    setEntry(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry !== "") {
      const newEntry = {
        id: uuidv4(),
        name: entry,
        amount: amount,
        type: type,
      };
      setEntries([...entries, newEntry]);
      setEntry("");
      setAmount(0);
      setType("expense");
      handleAlert({ type: "success", text: "item added successfully!" });
    } else {
      handleAlert({ type: "danger", text: "add entry name!" });
    }
  };

  const handleEdit = (id) => {
    let item = entries.find((entry) => entry.id === id);
    setEntry(item.name);
    setAmount(item.amount);
    setType(item.type);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleDeleteAll = () => {
    setEntries([]);
  };

  // Calculate total amounts
  let totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((acc, curr) => acc + +curr.amount, 0);

  let totalExpenses = entries
    .filter((entry) => entry.type === "expense")
    .reduce((acc, curr) => acc + +curr.amount, 0);

  return (
    <>
      <h1>Budget Calculator</h1>
      <div className="budget">
        <BudgetForm
          entry={entry}
          amount={amount}
          type={type}
          handleEntry={handleEntry}
          handleAmount={handleAmount}
          handleType={handleType}
          handleSubmit={handleSubmit}
        />
        <BudgetList
          entries={entries}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDeleteAll={handleDeleteAll}
        />
      </div>
      <div className="totals">
        <h2>Income: {totalIncome}</h2>
        <h2>Expenses: {totalExpenses}</h2>
        <h2>Balance: {totalIncome - totalExpenses}</h2>
      </div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
    </>
  );
}

export default App;
