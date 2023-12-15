import { CDN_URL } from "../Utils/constant";


const RestaurentCard = (props) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      sla,
      areaName,
      avgRating,
    } = props;
    return (
      <div className="w-[200px] m-4  bg-white transform hover:scale-90 transition-transform duration-200 ">
        <img
          className="rounded-2xl"
          src={
            CDN_URL +  cloudinaryImageId
          }
        />
        <div className="res-card-list">
        <h2 className="font-semibold truncate">{name}</h2>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{sla.deliveryTime + " min"}</h4>
        <h4>{avgRating} stars</h4>
        {/* <h4>{costForTwoString}</h4> */}
        </div>
      </div>
    );
  };

export const PromotedRestaurentCard = (RestaurentCard) =>{
      return(props) => {
        return(
          <div>
           <label> Promoted </label>
           <RestaurentCard {...props} />
          </div>
        )
      }
   
}

  export default RestaurentCard;