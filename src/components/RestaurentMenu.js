import { Params, useParams } from "react-router-dom";
import getRestaurentMenu from "../Utils/getRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer.js"

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = getRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  const {
    locality,
    name,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
    cuisines,
    veg,
    sla: { deliveryTime },
  } = resInfo?.cards?.[0]?.card?.card?.info;
  
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 mx-auto">
      <div className="flex justify-between mt-4">
        <div className="flex flex-col space-y-2">
          <div>
            <h1 className="font-bold">{name}</h1>
          </div>
          <div>
            <p className="text-xs">{cuisines.join(", ")}</p>
            <p className="text-xs">{locality}</p>
          </div>
        </div>

        <div className="bg-white border flex flex-col justify-center px-2 rounded-lg">
          <div className="text-center">
            <span className="text-green-600 font-extrabold text-sm">
              <span>&#9733; </span>
              {avgRating}
            </span>
          </div>
          <span className=" border-b border-slate-300"></span>
          <div>
            <span className="text-xs font-semibold text-slate-400">
              {totalRatingsString}
            </span>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-300 my-4"></div>

      {categories.map((category) => (
        <RestaurentCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurentMenu;
