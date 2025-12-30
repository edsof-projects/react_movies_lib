import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BtnTop from "./components/BtnTop"

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
