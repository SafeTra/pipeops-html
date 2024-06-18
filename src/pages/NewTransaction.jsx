import { CurrencySelect, DashboardContainer, Input } from "..";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { TransactionState } from "../data/Context";
import isEmail from "validator/lib/isEmail";

const NewTransaction = () => {
  const navigate = useNavigate();
  const [payPercent, setPayPercent] = useState(0);
  const [transactionComplete, setTransactionComplete] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    title: '', profile: '', currency: '', party: '', period: '', itemName: '', price: 0, category: '', seller: false,
    description: '', shippingFeeBy: '', shippingCost: 0, paymentBy: '', buyer: false,
  });
  const token = localStorage.getItem('token');
  const { dispatch } = TransactionState()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTransaction(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    if (newTransaction.seller && newTransaction.buyer) {
      setPayPercent(50);
    } else if (newTransaction.seller || newTransaction.buyer) {
      setPayPercent(100);
    } else {
      setPayPercent(0);
    }
    newTransaction.paymentBy = newTransaction.seller && newTransaction.buyer ? 'Both' : newTransaction.buyer ? 'Buyer' : 'Seller'
  }, [newTransaction.seller, newTransaction.buyer]);

  const handleNewTransaction = async (e) => {
    e.preventDefault();
    setTransactionComplete(Object.values(newTransaction).every(value => value !== ''));

    try {
      console.log(transactionComplete, newTransaction)
      if (transactionComplete){
        const response = await fetch(
          `https://safetra-be.onrender.com/api/v1/transactions/create-transaction`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
            body: JSON.stringify({ ...newTransaction }),
          }
        );

        if (!response.ok) throw new Error
        dispatch({type: 'ADD_TRANSACTION', payload: {...newTransaction}})

        toast.success('Transaction created successfully')
        setTimeout(() => navigate('/user/review-transaction'), 2000);
      }
      else {
        if (!newTransaction.title) toast.error('Please fill the transaction title field')
        else if (!newTransaction.profile) toast.error('Please select your profile')
        else if (!newTransaction.currency) toast.error('Please select a currency')
        else if (!newTransaction.period) toast.error('Please fill the Inspecified period field')
        else if (!newTransaction.itemName) toast.error('Please fill the Item name field')
        else if (!newTransaction.price) toast.error('Please fill the price field')
        else if (!newTransaction.category) toast.error('Please categorize the objet in transaction')
        else if (!newTransaction.description) toast.error('Please briefly describe the objet in transaction')
        else if (!newTransaction.shippingFeeBy) toast.error('Please select who pays shipping fee')
        else if (!newTransaction.shippingCost) toast.error('Please fill the Shipping cost field')
        else if (!isEmail(newTransaction.party)) toast.error('Please fill the party email address correctly')
        else if (!newTransaction.seller && !newTransaction.buyer) toast.error('Please check who pays SafeTra fee')
      }
    } catch (error) {
      console.log('Error during transaction creation: ', error)
    }
  };

  return (
    <DashboardContainer bgClr="white" url='/user' title='Start Transaction' childClassName='lg:w-2/3 mx-auto'>
      <form onSubmit={handleNewTransaction}>
        <hr className='mt-6' />
        <Input name='title' value={newTransaction.title} onChange={handleInputChange} type='text' label='Transaction Title' />
        <div className="md:flex w-full gap-6">
          <div className="flex max-md:flex-col *:w-full md:w-2/3 md:gap-6">
            <div className="form p-0">
              <select  name="profile" value={newTransaction.profile} onChange={handleInputChange} className={`form__input w-full ${!newTransaction.profile && 'text-gray-500'}`}>
                <option value="">Select</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <label htmlFor="profile" className="form__label">Profile</label>
            </div>
            <div className="form">
              <CurrencySelect selectedCurrency={newTransaction.currency} onCurrencyChange={(e) =>  setNewTransaction({ ...newTransaction, currency: e.target.value })} />
              <label htmlFor="currency" className="form__label">Currency</label>
            </div>
          </div>
          <Input className="md:w-1/3" name='period' value={newTransaction.period} onChange={handleInputChange} type='text' label='Inspection period (days)' />
        </div>
        <h2 className="lg:text-lg text-base mt-6">Transaction details</h2>
        <div className="flex *:w-full md:gap-6  max-md:flex-col">
          <Input name='itemName' value={newTransaction.itemName} onChange={handleInputChange} type='text' label='Item name' />
          <Input name='price' value={newTransaction.price} onChange={handleInputChange} type='text' label='Price' />
        </div>
        <div className="*:w-full">
          <Input name='description' value={newTransaction.description} onChange={handleInputChange} type='text' label='Item description' />
        </div>
        <div className="md:flex *:w-full gap-6">
          <Input name='category' value={newTransaction.category} onChange={handleInputChange} type='text' label='Item category' />
          <Input name='party' value={newTransaction.party} onChange={handleInputChange} type='text' label='Party Email Address' />
        </div>
        <div className="md:flex *:w-full gap-6">
          <div className="form p-0">
            <select  name="shippingFeeBy" value={newTransaction.shippingFeeBy} onChange={handleInputChange} className={`form__input w-full ${!newTransaction.shippingFeeBy && 'text-gray-500'}`}>
              <option value="">Select</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
            <label htmlFor="shippingFeeBy" className="form__label">Shipping fee paid by</label>
          </div>
          <Input name='shippingCost' value={newTransaction.shippingCost} onChange={handleInputChange} type='text' label='Shipping cost' />
        </div>
        <div>
          <p className="text-[#FF4B26] text-sm mt-6">SafeTra fee paid by:</p>
          <div className="flex max-lg:flex-col justify-between items-center gap-6">
            <div className="flex justify-between items-center max-lg:w-full gap-10">
              <div className="flex gap-2">
                <input
                  className="accent-gray-100"
                  type="checkbox"
                  name="seller"
                  checked={newTransaction.seller}
                  onChange={handleInputChange}
                />
                <label className="font-medium" htmlFor="seller">Seller</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="accent-gray-100"
                  type="checkbox"
                  name="buyer"
                  checked={newTransaction.buyer}
                  onChange={handleInputChange}
                />
                <label className="font-medium" htmlFor="buyer">Buyer</label>
              </div>
              <div className="*:py-3">
                <span className="rounded-s-lg border px-3 border-r-0">%</span>
                <span className="rounded-e-lg border px-5">{payPercent}</span>
              </div>
            </div>
            <button type="submit" className="btn btn-form m-0 py-3 md:w-1/3 max-sm:my-6 px-5 lg:w-1/4">Add Item</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </DashboardContainer>
  );
}

export default NewTransaction;