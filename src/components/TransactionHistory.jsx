import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import {Transaction} from './Transaction'


const TransactionHistory = () => {
    const data = useContext(GlobalContext);
    const transactions = data.transaction;

    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map((trans)=>(
                    <Transaction trans= {trans} key={trans.id}/>
                ))}
            </ul>
        </>
    );
};

export {TransactionHistory};
