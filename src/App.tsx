import Home from "./Pages/Home/Home.tsx";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart/Cart.tsx";
import {Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <div className='antialiased'> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </div>
  )
}

export default App;
