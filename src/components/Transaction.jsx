import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'



const Transaction = (props) => {
    
    const {deleteTransaction} = useContext(GlobalContext);
    
    const {id, description, amount} = props.trans;
    let sign;
    amount < 0 ? sign = 'minus': sign = 'plus';
    return(
        <li className={sign}>
            {description}{""}
            <span>
                {sign === 'plus' ? '+': '-'}${Math.abs(amount)}
            </span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>
            x
            </button>
        </li>
    );
}
export { Transaction };