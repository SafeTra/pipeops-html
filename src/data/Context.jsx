import { createContext, useContext, useReducer } from 'react';
import { transactionReducer } from './Reducers';

const Transaction = createContext()

const Context = ({children}) => {
  const [state, dispatch] = useReducer(transactionReducer, { transaction: [] })
  return (
    <Transaction.Provider value={{state, dispatch}}>{children}</Transaction.Provider>
  )
}

export default Context

export const TransactionState = () => useContext(Transaction);