import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector  } from "react-redux";


const Header = () => {
   
  const [btnName,setbtnName] = useState("Login")

  const cartItems = useSelector((store) => store.cart.items);
  console.log()  
    return (
      <div className="flex justify-between shadow-lg">
        <div className="flex  " >
          <img className="w-32 " src={LOGO_URL} />
        </div>
        <div className="flex items-center" >
          <ul className="flex">
            <li className="p-8"> <Link to="/">Home</Link> </li>
            <li className="p-8"> <Link to="/about">About Us</Link> </li>
            <li className="p-8"> <Link to="/contact">Contact Us</Link></li>
            <li className="p-8"> <Link to="/cartPage">Cart- ({cartItems.length} items)</Link></li>
            <button className="p-8"
                    onClick={() => {
                      btnName === "login" ? setbtnName("logout") : setbtnName("login")

                    }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;