import { Container } from "..";
import { arrow_left } from "../assets";
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <Container className="pt-8 bg-[#F0F3F8]">
      <h1 className="text-lg lg:text-xl font-medium pb-5">Logout</h1>
      <div className="bg-white w-full p-8 pb-16 lg:flex items-start ">
        <div className="rounded-full inline-block shadow-md bg-white py-4 px-3">
          <Link to='/dashboard'><img src={arrow_left} alt="Prev Page" /></Link>
        </div>
        <div className="lg:w-2/3 mx-auto">
          Logout
        </div>
      </div>
    </Container>
  )
}

export default Logout