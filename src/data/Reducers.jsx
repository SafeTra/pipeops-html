export const transactionReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "ADD_TRANSACTION":
      return { ...state, transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};