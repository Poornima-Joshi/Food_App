import { RES_URL } from "../utils/constants";


const RestaurantCard = ({resData}) => {
  // const { resData } = props;
  const { id, name, cloudinaryImageId, areaName, cuisines, avgRating } = resData?.info;
  
  return (
    <>
      <div className="res-card" key={id}>
        <div className="res-card-img">
          <img
            src={RES_URL+cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="res-card-footer">
          <p className="restro-name">{name}</p>
          <p className="res-rating">
            <span>
              <i className="bi bi-star-fill"></i>
            </span>{" "}
            <span>{avgRating}</span>{" "}
            <span><i class="bi bi-dot"></i></span><span>{resData?.info?.sla?.slaString}</span>
          </p>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p className="areaName">{areaName}</p>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
