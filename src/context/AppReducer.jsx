const AppReducer = (state, action) => {

switch (action.type){
    
    case  'Add_Transaction':
        return {                                                       
            transactions: [action.payload, ...state.transactions],
          };

    case  'Delete_Transaction':
        const newArr = state.transactions.filter((curr)=>{
            return curr.id!== action.payload;
        })
        return {
            transactions: newArr
        }
        
    default: 
        return state;
}

};
export default AppReducer;