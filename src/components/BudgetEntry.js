import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const BudgetEntry = ({ entry }) => {
  const { id, name, amount, type } = entry;
  return (
    <div className="budget-entry">
      {name} : {amount} ({type}) <MdEdit /> <MdDelete />
    </div>
  );
};

export default BudgetEntry;
