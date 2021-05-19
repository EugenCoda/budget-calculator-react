import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const BudgetEntry = ({ entry, handleEdit, handleDelete }) => {
  const { id, name, amount, type } = entry;
  return (
    <li key={id} className="budget-entry">
      {name} : {amount} ({type}){" "}
      <button
        aria-label="edit button"
        className="btn"
        onClick={() => handleEdit(id)}
      >
        <MdEdit />
      </button>
      <button
        aria-label="delete button"
        className="btn"
        onClick={() => handleDelete(id)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default BudgetEntry;
