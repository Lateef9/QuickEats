import RestaurentCard ,{PromotedRestaurentCard} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = PromotedRestaurentCard(RestaurentCard)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.966957%26lng%3D79.151817%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"    );
    let jsondata = await data.json();
    setListOfRestaurents(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(jsondata)
  };
  
  if(filteredRestaurants === null) return <Shimmer />
 
  // console.log(ListOfRestaurants);

  return (
    <div className=""> 
      <div className="flex  pl-16 pt-4">
        <div className="items-center">
          <input className="w-80 border-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button className="font-semibold bg-orange-400 m-4 px-4 py-1 rounded-md"
            onClick={() => {
              const searchedList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="items-center m-4 py-1 px-5">
          <button
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (restaurent) => restaurent.info.avgRating > 4
              );

              setListOfRestaurents(filteredList);
            }}
          >
            Filter Restaurent
          </button>
        </div>
      </div>
      
      
      
      <div className="flex flex-wrap justify-center top-0">
        {filteredRestaurants?.map((restaurant) => {
          return (
           <Link to={"/restaurents/"+ restaurant.info.id}> 
           {restaurant.info.promoted ? <RestaurantCardPromoted key={restaurant.info.id} resData ={restaurant.info}/> : <RestaurentCard key={restaurant.info.id} {...restaurant.info} /> }
            
           </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
