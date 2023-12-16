import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import getRestaurentMenu from "../Utils/getRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = getRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
    <div className="text-center">
      <h1 className=" font-bold text-lg">{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
