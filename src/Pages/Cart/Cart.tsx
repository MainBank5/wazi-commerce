import { useContext } from "react"
import { Products } from "../../apis/products"
import { Shopcontext } from "../../context/shopcontext"
import CartItem from "./cartitem"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const {cartItems, getTotalPrice} = useContext(Shopcontext)
  const totalCartAmount = getTotalPrice()
  const navigate = useNavigate()
  return (
    <div>
        <div>
        <h3 className="text-center py-4">{totalCartAmount > 0 ? <h1>Your Cart Items</h1> :"" }</h3>
        </div>
        <div className="">
          {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data = {product}/>
            }
          })}
        </div>
        { totalCartAmount > 0 ?
        <div className="flex flex-col justify-center items-center mb-4 pb-10">
          <p className="font-bold">Subtotal: ${totalCartAmount}</p>
          <button className="bg-orange-400 my-3 py-2 px-6 rounded-full hover:bg-transparent hover:border-orange-400 hover:border-2">CheckOut</button>
          <button className="bg-orange-400 my-3 py-2 px-8 rounded-full hover:bg-transparent hover:border-orange-400 hover:border-2"
            onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
        : <h1 className="text-center font-extrabold">Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart