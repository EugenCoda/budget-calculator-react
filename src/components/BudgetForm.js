import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const BudgetForm = () => {
  const [entry, setEntry] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  const handleEntry = (e) => {
    setEntry(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="budget-form">
      <form onSubmit={handleSubmit}>
        <label>
          Entry:
          <input
            type="text"
            name="entry"
            value={entry}
            onChange={handleEntry}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmount}
          />
        </label>
        <label>
          Income/Expense:
          <select value={type} onChange={handleType}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <button type="submit">
          Submit <MdSend />
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;
