import { CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({data}) => {
  const dispatch = useDispatch();

  const handleOnclick = (item) =>{
    dispatch(addItem(item))
  }
    console.log(data)
    return(
        <div>
        {data.map((item) => (
         <div className="flex border-b-2 border-gray-200 py-4">
                <div className="w-10/12 text-left ">
                <span className="py-2 text-base font-semibold">{item.card.info.name}</span> <br />
                <span className="py-2 text-sm font-medium">₹{item.card.info.price/100}</span>
                <p className="text-xs py-2 font-light">{item.card.info.description}</p>
                </div>

                <div className="w-2/12 ">
                <div className="absolute">
                <button className="my-16 mx-5 px-2 pb-1 text-sm rounded-lg bg-black text-white shadow-lg" 
                onClick={() => handleOnclick(item)}
                >- Add  +</button>
                </div>
                <img className="pt-4" src={CDN_URL + item.card.info.imageId} alt="" />
                
                </div>
              
         </div>
        ))}
      </div>
    )
}


export default ItemList;