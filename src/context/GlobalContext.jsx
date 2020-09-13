import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        
    ]
}

// Creating Context
const GlobalContext = createContext(initialState);
export {GlobalContext};

// Creating Context Provider
const GlobalProvider = ({children}) => {

// Using Reducer Function
const [state, dispatch] = useReducer(AppReducer, initialState);

function addTransaction(transaction){
    dispatch({
        type: 'Add_Transaction',
        payload: transaction
    })
    

    
}

function deleteTransaction(id) {
    dispatch({
        type: 'Delete_Transaction',
        payload: id
    })
}

return(
 
 <GlobalContext.Provider value={
    {
        transaction: state.transactions,
        addTransaction,
        deleteTransaction
    }
 }>

    {children}


</GlobalContext.Provider>

)
}

export {GlobalProvider};