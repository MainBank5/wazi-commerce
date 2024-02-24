import { createContext, useState } from "react";
import { Products } from "../apis/products";

export const Shopcontext = createContext(null)
const getDefaultCart = () => {
  let cart = {};
  for(let i = 1; i < Products.length + 1; i++ ) {
    cart[i] = 0;
  }
  return cart
}

const Cartcontext = ({children}:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const addToCart = (itemId:number) => {
    setCartItems((prev:object) => ({...prev, [itemId]:prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId:number) => {
    setCartItems((prev:object) => ({...prev, [itemId]:prev[itemId] - 1 })) //prev[itemid] is alternate way of accessing items in an object
  }//if the itemId(key) passed is similar to any key in the prev, its mutated if the id is different its addedd as a new entry into the object 
  
  const updateCartAmount = (newAmount:number, itemId:number) => {
    setCartItems((prev) => ({...prev, [itemId]:newAmount}))
  }

  const getTotalPrice = () => {
    let totalAmount = 0
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        console.log()
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  

 console.log(cartItems)
  return (
    <Shopcontext.Provider value = {{cartItems, addToCart, removeFromCart, updateCartAmount, getTotalPrice}}>{children}</Shopcontext.Provider>
  )
}

export default Cartcontext;