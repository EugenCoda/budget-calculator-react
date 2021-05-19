import React from "react";
import { MdSend } from "react-icons/md";

const BudgetForm = ({
  entry,
  amount,
  type,
  handleSubmit,
  handleEntry,
  handleAmount,
  handleType,
}) => {
  return (
    <div className="budget-form">
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="entry">
              Entry:
              <input
                type="text"
                id="entry"
                name="entry"
                placeholder="e.g. rent"
                value={entry}
                onChange={handleEntry}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="amount">
              Amount:
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={handleAmount}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="type">
              Type:
              <select value={type} onChange={handleType}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </label>
          </div>
        </div>

        <button type="submit">
          Submit <MdSend />
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;
