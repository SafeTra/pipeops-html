import { Container, Input } from "..";
import { useEffect, useState } from "react";
import { arrow_left } from "../assets";
import { Link } from 'react-router-dom';

const NewTransaction = () => {
  const [payPercent, setPayPercent] = useState(0);
  const [newTransaction, setNewTransaction] = useState({
    title: '', profile: '', currency: '', period: '', itemName: '', price: '', category: '', seller: false, buyer: false,
    description: '', shippingMethod: '', shippingFeeBy: '', shippingCost: '', paymentBy: '',
  });

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
  }, [newTransaction.seller, newTransaction.buyer]);

  const handleNewTransaction = async (e) => {
    e.preventDefault();
    console.log(newTransaction);
  };

  return (
    <Container className="lg:flex items-start">
      <div className="rounded-full inline-block shadow-md bg-white py-4 px-3">
        <Link to='/dashboard'><img src={arrow_left} alt="Prev Page" /></Link>
      </div>
      <div className="lg:w-2/3 mx-auto">
        <form onSubmit={handleNewTransaction}>
          <hr className='mt-6' />
          <Input name='title' value={newTransaction.title} onChange={handleInputChange} type='text' label='Transaction Title' />
          <div className="md:flex w-full gap-6">
            <div className="flex *:w-full md:w-2/3 gap-6">
              <div className="form p-0">
                <select name="profile" value={newTransaction.profile} onChange={handleInputChange} className="form__input w-full">
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
                <label htmlFor="profile" className="form__label">Profile</label>
              </div>
              <Input name='currency' value={newTransaction.currency} onChange={handleInputChange} type='text' label='Currency' />
            </div>
            <Input className="md:w-1/3" name='period' value={newTransaction.period} onChange={handleInputChange} type='text' label='Inspection period (days)' />
          </div>
          <h2 className="lg:text-lg text-base mt-6">Transaction details</h2>
          <div className="flex *:w-full gap-6">
            <Input name='itemName' value={newTransaction.itemName} onChange={handleInputChange} type='text' label='Item name' />
            <Input name='price' value={newTransaction.price} onChange={handleInputChange} type='text' label='Price' />
          </div>
          <div className="*:w-full">
            <Input name='category' value={newTransaction.category} onChange={handleInputChange} type='text' label='Item category' />
            <Input name='description' value={newTransaction.description} onChange={handleInputChange} type='text' label='Item description' />
          </div>
          <div className="md:flex w-full gap-6">
            <div className="flex *:w-full md:w-2/3 gap-6">
              <Input name='shippingMethod' value={newTransaction.shippingMethod} onChange={handleInputChange} type='text' label='Shipping method' />
              <div className="form p-0">
                <select name="shippingFeeBy" value={newTransaction.shippingFeeBy} onChange={handleInputChange} className="form__input w-full">
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
                <label htmlFor="shippingFeeBy" className="form__label">Shipping fee paid by</label>
              </div>
            </div>
            <Input className="md:w-1/3" name='shippingCost' value={newTransaction.shippingCost} onChange={handleInputChange} type='text' label='Shipping cost' />
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
              <button type="submit" className="btn btn-form m-0 py-3 px-5 lg:w-1/6">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default NewTransaction;