import { RES_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, areaName,sla, cuisines, avgRatingString } = resData?.info;
  const {slaString} = sla.slaString
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
              <i class="bi bi-star-fill"></i>
            </span>{" "}
            <span>{avgRatingString}</span>{" "}
            <span>• {slaString}</span>
          </p>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p className="areaName">{areaName}</p>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
