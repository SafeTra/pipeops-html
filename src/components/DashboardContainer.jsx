import { Container } from "..";
import { arrow_left } from "../assets";
import { Link } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

const DashboardContainer = ({title, url, children, childClassName}) => {
  return (
    <Container className="md:pt-8 bg-[#F0F3F8] max-md:px-0">
      <h1 className="text-lg lg:text-xl font-medium pb-5 max-md:hidden">{title}</h1>
      <div className="bg-white w-full p-8 lg:pb-16 lg:flex items-start max-md:bg-[#fdfdfd]">
        <h1 className="text-lg lg:text-xl font-medium pb-5 md:hidden">{title}</h1>
        {url && <Link className="rounded-full inline-block shadow-md bg-white py-4 px-3" to={url}><img src={arrow_left} alt="Prev Page" /></Link>}
        <div className={childClassName}>
          {children}
        </div>
      </div>
      <ToastContainer />
    </Container>
  )
}

export default DashboardContainer