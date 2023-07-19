import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";


export const CartPage = () => {
    const cartListLength = 2;
  return (
    <main>
        {cartListLength ? <CartList/> :  <CartEmpty/>}

    </main>
  )
}


