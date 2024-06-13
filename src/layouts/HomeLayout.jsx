import { Outlet } from "react-router-dom"
import { Header, Footer } from ".."

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout