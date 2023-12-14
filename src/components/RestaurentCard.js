import { CDN_URL } from "../Utils/constant";


const RestaurentCard = (props) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      area,
      lastMileTravelString,
      costForTwoString,
      avgRating,
    } = props;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +  cloudinaryImageId
          }
        />
        <div className="res-card-list">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        {/* <h4>{area}</h4> */}
        <h4>{avgRating} stars</h4>
        {/* <h4>{costForTwoString}</h4> */}
        </div>
      </div>
    );
  };

  export default RestaurentCard;