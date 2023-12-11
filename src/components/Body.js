import RestaurentCard from "./RestaurentCard";
import { restaurantList } from "../Utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.966957&lng=79.151817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsondata = await data.json();
    setListOfRestaurents(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(ListOfRestaurants);

  return (
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const searchedList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="Filter-btn">
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
