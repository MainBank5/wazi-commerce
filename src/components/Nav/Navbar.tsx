
const Navbar = () => {
  const links :{name:string}[] = [
    { name: "Home" },
    { name: "Phone" },
    { name: "Phone Cases" },
    { name: "Accessories" },

  ]
  
  
  return (
    <div className="fixed w-full shadow-md top-0 left-0 bg-white dark:bg-slate-600 dark:text-white duration-200">
        <div className="flex justify-between items-center">

          <div>
            <a href="#" className="text-3xl text-orange-400 font-semibold tracking-wider ">E-MART</a>
          </div>

          <div>
            <ul className="hidden md:block">
              {links.map((link, index) => (
                <li key={index}>{link.name}</li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar