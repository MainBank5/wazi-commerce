import { useContext } from "react"
import { Shopcontext } from "../../context/shopcontext"

type Productprops = {
  data: {
    id:number, 
    productName:string, 
    price: number, 
    productImage:string
  }
    
}



const Product = ({data } :Productprops) => {
  const {id, productName, price, productImage} = data
  const {addToCart, cartItems} = useContext(Shopcontext)
  const cartItemsAmount = cartItems[id]
  console.log(cartItems[id])
  
  return (
    <div className="flex flex-col">
      <div className="w-full h-full object-cover bg-no-repeat"><img src={productImage} alt="image product" className="object-cover  bg-no-repeat rounded-xl" /></div>
      <div className="flex flex-col text-center w-full">
        <p className="font-bold">{productName}</p>
        <p className="font-semibold">${price}</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="px-1 py-1
         border-2 border-yellow-300 hover:bg-yellow-400 w-1/2 rounded-xl" onClick={() => addToCart(id)}>Add to Cart
         {cartItemsAmount > 0 && <i> ({cartItemsAmount})</i>}
        </button>
      </div>
      
    </div>
  )
}

export default Product