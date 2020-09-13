import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { ExpensesProfits } from "./components/ExpensesProfits";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>

      <Header />
      <Balance />
      <ExpensesProfits/>
      <TransactionHistory/>
      <AddTransaction />
      
      
    </GlobalProvider>
  );
}

export default App;
