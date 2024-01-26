import Button from '../UI/Button';
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const links :{name:string}[] = [
    { name: "Home" },
    { name: "Phone" },
    { name: "Phone Cases" },
    { name: "Accessories" },

  ]
  
  
  return (
    <div className="fixed w-full shadow-md top-0 left-0 bg-white dark:bg-slate-600 dark:text-white duration-200">
        <div className="flex justify-between items-center px-8 py-4 h-[90px]">

          <div>
            <a href="#" className="text-3xl text-orange-400 font-semibold tracking-wider ">E-MART</a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li className="px-3 cursor-pointer font-semibold hover:text-black dark:hover:text-white" key={index}>{link.name}</li>
              ))}
            </ul>
          </div>

          <div className="cursor-pointer flex items-center gap-5">
            <MdFavoriteBorder size={30}/>
            <FaCartShopping size={30}/>
            <div>
            <Button>
              Login
            </Button>
            </div>
            </div>

          
            
          
        
           
          
        </div>
    </div>
  )
}

export default Navbar