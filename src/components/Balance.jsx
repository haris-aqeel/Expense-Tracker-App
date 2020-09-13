import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {
    const {transaction} = useContext(GlobalContext);
    const balance = transaction.map((trans)=>trans.amount);
    // console.log(balance);

    const total = balance.reduce((prev, curr)=>{return prev+curr},0)
    
    return(
        <>
            <h4>Your Balance</h4>
            <h1>${total.toFixed(2)}</h1>
        </>
    );
}

export { Balance };