

type Buttonprops = {
    children:React.ReactNode
    
}

const Button = ({children} : Buttonprops) => {
  return (
    <button className="bg-orange-400 py-2 px-8 rounded-full hover:bg-transparent hover:border-orange-400 hover:border-2">
        {children}
    </button>
  )
}

export default Button