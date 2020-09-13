import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'

const ExpensesProfits = () => {
    const {transaction} = useContext(GlobalContext);
    const balance = transaction.map((trans)=>trans.amount);
    const income = balance.filter((currBal)=>currBal > 0).reduce((prev,curr)=>prev+curr, 0).toFixed(2);
    const expense = balance.filter((currBal)=>currBal < 0).reduce((prev,curr)=>prev+curr, 0).toFixed(2);
    
    return(
    <>
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>    
    </>
    );
}

export {ExpensesProfits};