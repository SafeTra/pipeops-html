import {ItemCategory, TransactionDetails} from '..'
import { TransactionState } from '../data/Context'

const ReviewTransaction = () => {
  const {state: {transactions}} = TransactionState()
  console.log(transactions)
  return (
    <div className='container'>
      <ItemCategory />
      <TransactionDetails/>
    </div>
  )
}

export default ReviewTransaction