

type Buttonprops = {
    children:React.ReactNode
}

const Button = ({children} : Buttonprops) => {
  return (
    <button className="bg-orange-400 py-3 px-6 rounded-full">
        {children}
    </button>
  )
}

export default Button