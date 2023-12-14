import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import getRestaurentMenu from "../Utils/getRestaurentMenu";

const RestaurentMenu = () => {
    
  const { resId } = useParams();
  const resInfo = getRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[0]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  


  return (
    <div className="RestaurentMenu">
      <h1> {name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}
            {item.card.info.price || item.card.info.defaultprice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
