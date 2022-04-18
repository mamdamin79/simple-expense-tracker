import Balance from "./components/Balance";
import Header from "./components/Header"
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";
import TransactionList from "./components/TransactionList";
function App() {
  return (
    <div className="app">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <NewTransaction/>
    </div>
  );
}

export default App;
