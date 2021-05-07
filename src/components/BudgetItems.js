import React from "react";
import BudgetEntry from "./BudgetEntry";
import { MdDelete } from "react-icons/md";

const BudgetItems = ({ entries }) => {
  return (
    <div className="budget-items">
      Budget Items
      {entries.map((entry) => {
        return <BudgetEntry key={entry.id} entry={entry} />;
      })}
      <button>
        Clear Expenses <MdDelete />
      </button>
    </div>
  );
};

export default BudgetItems;
