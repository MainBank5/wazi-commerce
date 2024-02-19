import Home from "./Pages/Home.tsx";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <div className='antialiased'> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </div>
  )
}

export default App;
