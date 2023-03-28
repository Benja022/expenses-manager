import "./App.css";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";
import { useState } from "react";

function App() {
  const [addExpense, setAddExpense] = useState({});
  const saveNewExpense = (expense) => {
    setAddExpense(expense);
  };
  const handleExspense = () => {
    setAddExpense({});
  };
  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses onSaveNewExpense={saveNewExpense} />
      <Expenses onNewExpense={addExpense} onClearExpense={handleExspense} />
    </div>
  );
}

export default App;
