import Button from '../UI/Button';
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaTimes, FaBars } from "react-icons/fa";

import {useState} from 'react'


const Navbar = () => {
  const links :{name:string}[] = [
    { name: "Home" },
    { name: "Phone" },
    { name: "Phone Cases" },
    { name: "Accessories" },

  ]

  const [bars, setBars] = useState(false);
  
  
  return (
    <div className="fixed w-full shadow-md dark:bg-slate-600 text-white duration-200">
        <div className="flex container mx-auto justify-between items-center px-8 py-4 h-[90px] text-center">

          <div>
            <a href="#" className="text-3xl text-orange-500 font-semibold tracking-wider ">E-MART</a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8 list-none">
              {links.map((link, index) => (
                <li className="px-3 cursor-pointer font-semibold hover:px-3 hover:bg-orange-500 rounded-lg
                 dark:hover:text-white" 
                key={index}>{link.name}</li>
              ))}
            </ul>
          </div>

          <div className="cursor-pointer flex items-center gap-5 text-white">
            <MdFavoriteBorder size={30}/>
            <FaCartShopping size={30}/>

            <div className="hidden md:block">
            <Button>
              Login
            </Button>
            </div>
          </div>

          <div className="block md:hidden transition z-10 duration-200 " onClick={()=>setBars(!bars)}>
            {bars ? <FaTimes/> : <FaBars/>}
          </div>
            
          {bars && (
            
            <ul className="w-full h-screen list-none absolute top-0 left-0 flex flex-col justify-center items-center bg-slate-600">
              {links.map((link, index) =>(
                <li className="py-6 text-3xl" key={index}>{link.name}</li>
              ))}
              <div className="mt-6">
                <Button>
                logIn
              </Button>
              </div>
              
            </ul>
            
          )}
        
           
          
        </div>
    </div>
  )
}

export default Navbar