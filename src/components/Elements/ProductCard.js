import { Link } from "react-router-dom";
import { Ratings } from "./Ratings";



export const ProductCard = ({product}) => {
    const {id,name,overview,price,rating,image_local,best_seller} = product;
return (
    
    <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
        <Link to={`/products/${id} `} className="relative ">
            {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
            <img className="rounded-t-lg my-2  max-h-80  max-w-xs" src={image_local} alt="product" />
        </Link>
        </div>
        <div className="px-5 pb-5 text-center">
            <Link to={`/products/${id} `}>
                <h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            <div className="flex justify-center mt-2.5 mb-5">
                <Ratings rating={rating} />
                
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
            </div>
        </div>
    </div>

  )
}


