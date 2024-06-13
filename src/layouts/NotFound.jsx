import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/' className='underline text-blue-800 hover:text-blue-600'>Click to go back to Homepage</Link>
    </div>
  )
}

export default NotFound