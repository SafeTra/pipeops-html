import { Container, Input } from "..";
import { useState } from "react"
import { arrow_left } from "../assets";
import {Link} from 'react-router-dom'

const NewTransaction = () => {
  const [newTransaction, setNewTransaction] = useState({
    title: '', profile: '', currency: '', period: '', itemName: '', price: '', category: '',
    description: '', shippingMethod: '', shippingFee: '', shippingCost: '', paymentBy: '',
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setNewTransaction({...newTransaction, [name]: value,})
  }

  const handleCurrencyChange = (e) => setNewTransaction({ ...newTransaction, currency: e.target.value });

  const handleNewTransation = async e => {
    e.preventDefault();

  }

  return (
    <Container className="lg:flex items-start">
      <div className="rounded-full inline-block shadow-md bg-white py-4 px-3">
        <Link to='/dashboard'><img src={arrow_left} alt="Prev Page" /></Link>
      </div>
      <div className="lg:w-2/3 mx-auto">
        <form onSubmit={handleNewTransation} >
          <hr className='mt-6' />
          <Input name='title' value={newTransaction.title} onChange={handleInputChange} type='text' label='Transaction Title' />
          <div className="md:flex w-full gap-6" >
            <div className="flex *:w-full md:w-2/3 gap-6">
              <Input name='profile' value={newTransaction.profile} onChange={handleInputChange} type='text' label='Profile' />
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
          <div className="md:flex w-full gap-6" >
            <div className="flex *:w-full md:w-2/3 gap-6">
              <Input name='shippingMethod' value={newTransaction.shippingMethod} onChange={handleInputChange} type='text' label='Shipping method' />
              <Input name='shippingFee' value={newTransaction.shippingFee} onChange={handleInputChange} type='text' label='Shipping fee paid by' />
            </div>
            <Input className="md:w-1/3" name='shippingCost' value={newTransaction.shippingCost} onChange={handleInputChange} type='text' label='Shipping cost' />
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewTransaction