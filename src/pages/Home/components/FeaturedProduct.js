import { useState,useEffect } from "react";
import {ProductCard} from "../../../components";



const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch("http://localhost:8000/featured_products")
      const data = await response.json();
      setProducts(data)
    }
    fetchProducts();
  },[])
  return (
    <section>
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 my-5 underline underline-offset-8'>Featured Books</h1>
        <div className='flex flex-wrap justify-center lg:flex-row'>
          {products.map((product) =>(
            <ProductCard key={product.id} product={product}/>
          ))}
            
        </div>
      
    </section>
  )
}

export default FeaturedProduct
