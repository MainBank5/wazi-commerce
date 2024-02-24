import { Shopcontext } from "../../context/shopcontext"
import { useContext } from "react"
type Cartprops = {
    data: {
        id:number;
        productName:string, 
        price: number, 
        productImage:string
    }  
}

const CartItem = ({data}:Cartprops) => {
    const {id, productName, price, productImage} = data

    const {cartItems, addToCart, removeFromCart, updateCartAmount} = useContext(Shopcontext)
    
  return (
    <div className="flex flex-col">
        <div className="w-full flex  justify-center items-center py-10" >
            <div className="shadow-2xl flex justify-between h-60 mt-2 rounded-lg py-4">
                <div className=" mx-20" >
            <img src={productImage} alt="productimag" className="bg-no-repeat object-cover w-80 rounded-xl" />
            </div>
            
            <div className="text-center flex flex-col items-center justify-center mx-10">
               <p className="font-bold">{productName}</p>
               <p className="font-semibold">${price}</p>
               <div className="flex justify-center items-center">
                <button className="font-bold border-2 px-3" onClick={() => {addToCart(id)}}>+</button>
                <input className="w-1/2 px-3 text-center border-2 border-orange-400 outline-yellow-500" 
                value={cartItems[id]} onChange={(e) => updateCartAmount(Number(e.target.value), id)}/>
                <button className="font-bold border-2 px-3" onClick={() => {removeFromCart(id)}}>-</button>
            </div>
            </div>
            
            </div>
            

        </div>
       
    </div>
  )
}

export default CartItem;