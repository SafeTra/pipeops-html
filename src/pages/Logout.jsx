import { DashboardContainer } from "..";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `https://safetra-be.onrender.com/api/v1/users/logout`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error
      localStorage.removeItem('token')
      navigate('/')
    } catch (error) {
      console.log('Error during logout: ', error);
    }
  }
  return (
    <DashboardContainer childClassName='' bgClr="white" title='Logout'>
      <button onClick={handleLogout} className="btn btn-form">Click to Logout</button>
    </DashboardContainer>
  )
}

export default Logout