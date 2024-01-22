import { useDispatch, useSelector } from "react-redux";
import { clearCart,removeItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constant.js";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () =>{

    // const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearcart = () =>{
        dispatch(clearCart())
    }

    const handleremoveItem =(item) =>{
        dispatch(removeItem(item.card.info.id))
        toast.error('Removed from the Cart', {
            className : "font-ProximaNovaSemiBold",
            position : "top-center",
            duration : 1500
        });
    } 
    
    console.log(cartItems)
    return (
    <div className="text-center">
    <Toaster />
        <h1 className="text-2xl font-bold">{}</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-red-600 text-black font-bold rounded-lg"
            onClick={handleClearcart}> Clear Cart</button>

            {cartItems.length === 0 && ( <h1>Cart is Emplty, Please add Items</h1> )}

            
        <div>
        
        {cartItems.map((item,index) => (
               <div className="group flex px-4 border-b-2 border-gray-200 py-4 rounded-md hover:bg-gray-100 ">
                <div className="w-10/12 text-left ">
                <span className="py-2 text-base font-semibold">{item.card.info.name}</span> <br />
                <span className="py-2 text-sm font-medium">₹{item.card.info.price/100}</span>
                <p className="text-xs py-2 font-light">{item.card.info.description}</p>
                </div>

                <div className="w-2/12 ">
                <div className="absolute">
                </div>
                <img className="pt-4 h-4/6" src={CDN_URL + item.card.info.imageId} alt="" />
                </div>
                <div>
                    

                <MdDelete className="mt-4 text-red-600 text-3xl cursor-pointer group-hover:text-red-600" 
                onClick={() =>{handleremoveItem(item)}}
                />
                    
                </div>
              
               </div>
               
         
        ))}
        
      </div>
        </div>
    </div>
    )

}

export default CartPage;