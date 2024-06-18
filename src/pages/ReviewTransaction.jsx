import { TransactionDetails} from '..'
import { CurrencySelect, DashboardContainer, Input } from "..";
import { ToastContainer, toast } from 'react-toastify';
import { TransactionState } from '../data/Context'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ReviewTransaction = () => {
  const navigate = useNavigate();
  console.log(transactions, newTransaction)

  const {state: {transactions}, dispatch } = TransactionState()
  const [newTransaction, setNewTransaction] = useState({})
  useEffect(() => {setNewTransaction({...transactions})}, [transactions])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTransaction(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : (name === 'price' || name === 'period' || name === 'shippingCost' ? Number(value) : value),
    }));
  };

  const handleNewTransaction = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://safetra-be.onrender.com/api/v1/transactions/create-transaction`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ ...newTransaction }),
        }
      );

      console.log(newTransaction)
      if (!response.ok) throw new Error
      const data = response.json()
      console.log(data)
      /* https://safetra-be.onrender.com/api/v1/users?id=hbasj */
      //newTransaction.amount = data.amount
      dispatch({ type: 'ADD_TRANSACTION', payload: { ...newTransaction } });

      toast.success('Transaction created successfully');
      setTimeout(() => navigate('/user/review-transaction'), 2000);
    } catch (error) {
      console.log('Error during transaction creation: ', error);
    }
  }
  return (
    <>
    <DashboardContainer bgClr="white" url='/user' title='Start Transaction' childClassName='lg:w-2/3 mx-auto'>
      <form onSubmit={handleNewTransaction}>
        <hr className='mt-6' />
        <Input name='title' value={transactions.title} onChange={handleInputChange} type='text' label='Transaction Title' />
        <div className="md:flex w-full gap-6">
          <div className="flex max-md:flex-col *:w-full md:w-2/3 md:gap-6">
            <div className="form p-0">
              <select name="profile" value={transactions.profile} onChange={handleInputChange} className={`form__input w-full ${!transactions.profile && 'text-gray-500'}`}>
                <option value="">Select</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <label htmlFor="profile" className="form__label">Profile</label>
            </div>
            <div className="form">
              <CurrencySelect selectedCurrency={transactions.currency} onCurrencyChange={(e) => setNewTransaction({ ...newTransaction, currency: e.target.value })} />
              <label htmlFor="currency" className="form__label">Currency</label>
            </div>
          </div>
          <Input className="md:w-1/3" name='period' value={transactions.period} onChange={handleInputChange} type='number' label='Inspection period (days)' />
        </div>
        <h2 className="lg:text-lg text-base mt-6">Transaction details</h2>
        <div className="flex *:w-full md:gap-6 max-md:flex-col">
          <Input name='itemName' value={transactions.itemName} onChange={handleInputChange} type='text' label='Item name' />
          <Input name='price' value={transactions.price} onChange={handleInputChange} type='number' label='Price' />
        </div>
      </form>
      <TransactionDetails/>
    </DashboardContainer>
    <ToastContainer />
    </>
  )
}

export default ReviewTransaction