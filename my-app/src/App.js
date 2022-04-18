import React, { useState } from 'react';
import Balance from "./components/Balance";
import Header from "./components/Header"
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";
import TransactionList from "./components/TransactionList";
function App() {
  const [transactions , setTransactions] = useState([])
  const addTransaction = (transInfo) => {
    setTransactions([...transactions,transInfo])
  }
  const removeTransaction = (id) => {
    setTransactions(transactions.filter(tr => tr.id !== id))
  }
  return (
    <div className="app">
      <Header/>
      <Balance transactions={transactions}/>
      <IncomeExpense transactions={transactions}/>
      <TransactionList removeTransaction={removeTransaction} transactions={transactions}/>
      <NewTransaction addTransaction={addTransaction}/>
    </div>
  );
}

export default App;
