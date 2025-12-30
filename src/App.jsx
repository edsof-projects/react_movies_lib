import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import BtnTop from "./components/BtnTop"
import Footer from "./components/Footer"

function App() {

  return (
      <div className='App'>
         <Navbar />
         <Outlet />
         <BtnTop />
         <Footer />
      </div>     
  )
}

export default App
