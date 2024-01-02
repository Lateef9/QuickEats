import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const CartPage = () =>{

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearcart = () =>{
        dispatch(clearCart())
    }

    return (
    <div className="text-center">
        <h1 className="text-2xl font-bold">{}</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearcart}> Clear Cart</button>

            {cartItems.length === 0 && ( <h1>Cart is Emplty, Please add Items</h1> )}

            <ItemList data={cartItems}/>
        </div>
    </div>
    )

}

export default CartPage;