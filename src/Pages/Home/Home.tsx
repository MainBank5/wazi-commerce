import { Products } from "../../apis/products";
import Product from "./Product";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col mx-auto px-4">
        <h1 className="text-center px-4 my-4">Best selling</h1>
        <div className="my-14 px-20 w-full grid grid-cols-2 md:grid-cols-3 gap-8 ">
          {Products.map((product) => (
            <div key={product.id}>
              <Product data = {product}/>
            </div>
            
          ))}
        </div>
      </div>
      
        
    </div>
  )
}

export default Home;