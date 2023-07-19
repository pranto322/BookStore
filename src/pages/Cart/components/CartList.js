import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";


export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const cartList = [
        {
            "id": 1018,
            "name": "The Light Beyond the Garden Wall",
            "overview": "'The Light Beyond the Garden Wall' is a captivating novel that explores the themes of love, loss, and the power of nature.",
            "long_description": "Follow the journey of a young woman as she discovers a hidden garden and the magic that lies within it. As she tends to the plants and flowers, she begins to heal from the pain of her past and finds hope for her future. With vivid descriptions and beautiful prose, this book is a must-read for anyone who loves nature and believes in the transformative power of the natural world.",
            "price": 19,
            "image_local": "/assets/images/1018.jpg",
            "rating": 4,
            "in_stock": false,
            "size": 0,
            "best_seller": true
          }

    ];
    return (
        <>
          <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
              My Cart 2
            </p>
          </section>
         {cartList.map((product) => (
            <CartCard key={product.id} product= {product}/>
         ))}
          
          <section>
          
          </section>
    
          <section className="max-w-4xl m-auto">
            <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
              <p className="flex justify-between my-2">
                <span className="font-semibold">Total Amount:</span>
                <span>$99</span>
              </p>
            </div>
            <div className="text-right my-5">
              <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
              </button>
              {checkout && <Checkout setCheckout={setCheckout}/>}
            </div>
          </section>
          
        </>
      )
}


