import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import {FaTimes, FaBars, FaShoppingCart, FaHeart} from 'react-icons/fa'

const Navbar = () => {
    const Navlinks = [
        {title:"Home", url:"/"},
        {title:"Phones", url:"/phones"},
        {title:"Accessories", url:"/accessories"},
        {title:"Laptops", url:"/laptops"},
    ]
    const  [mobilemenu, setMobileMenu] = useState(false);
    const  handleNavbar = ()=>{
       setMobileMenu(!mobilemenu)
    }

    const handleMobileMenu = () => {
      setMobileMenu(false)
    }

  return (
    <nav className='w-full h-24 shadow-lg'>
        <div className='flex justify-between items-center text-center p-6 mx-4 md:mx-8'>
            <div>
                <Link to="/" className='text-3xl md:text-2xl '>ShopWay</Link>
            </div>

            <div className='hidden md:block'>
              <ul className='flex justify-center items-center gap-10'>
                {Navlinks.map((item, index) => (
                    <li key={index}>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                ))}
              </ul>
            </div>


            <div className='flex justify-between items-center text-orange-400 gap-8'>
                <Link to="/cart"><FaShoppingCart size={20}/></Link>
                <Link to="/wishlist"><FaHeart size={20}/></Link>
            </div>

            <div  onClick={handleNavbar} className="md:hidden z-10 ">
               {mobilemenu ? <FaTimes size={20} /> : <FaBars size={20}/>}
            </div>
            {/* Mobile menu */}
             {mobilemenu && <div className="md:hidden bg-slate-500 absolute h-screen w-full top-0 left-0 ">
                <ul  className="flex flex-col items-center justify-center h-[80%] gap-10">
                  {Navlinks.map((item, index) => (
                    <li key={index} onClick={handleMobileMenu}>
                      <Link to={item.url} className='text-white block py-2 px-4'>{item.title}</Link>
                    </li>
                    
                  ))}
                </ul>
                <div onClick={handleMobileMenu} className='absolute top-[33rem] right-[9.5rem]'>
                  <Button > <Link to="/cart">Cart</Link></Button>
                </div>
                
              </div>}
        </div>
    </nav>
  )
}

export default Navbar;