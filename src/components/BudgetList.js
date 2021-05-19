import React from "react";
import BudgetEntry from "./BudgetEntry";
import { MdDelete } from "react-icons/md";

const BudgetList = ({ entries, handleEdit, handleDelete, handleDeleteAll }) => {
  return (
    <div className="budget-items">
      <h3>Budget Items</h3>
      <br />
      <ul>
        {entries.map((entry) => {
          return (
            <BudgetEntry
              key={entry.id}
              entry={entry}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <br />
      {entries.length > 0 && (
        <button onClick={handleDeleteAll}>
          Clear All Items <MdDelete />
        </button>
      )}
    </div>
  );
};

export default BudgetList;
