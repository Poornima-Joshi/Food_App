import { RES_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({resData}) => {
  // const { resData } = props;
  const {loggedInUser}= useContext(UserContext)
  const { id, name, cloudinaryImageId, areaName, cuisines, avgRating } = resData?.info;
  
  return (
    <>
      <div className="res-card">
        <div className="res-card-img ">
          <img
            src={RES_URL+cloudinaryImageId}
            alt=""
            className="shadow-sm"
          />
        </div>
        <div className="res-card-footer">
          <p className="restro-name">{name}</p>
          <p className="res-rating">
            <span>
              <i className="bi bi-star-fill"></i>
            </span>{" "}
            <span>{avgRating}</span>{" "}
            <span><i className="bi bi-dot"></i></span><span>{resData?.info?.sla?.slaString}</span>
          </p>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p className="areaName mb-0">{areaName}</p>
          <p className="text-dark">User: {loggedInUser}</p>
        </div>
      </div>
    </>
  );
};

export const withDiscountCard = (RestaurantCard) =>{
  return (props)=>{
    const {resData} = props;
    const {header,subHeader} = resData?.info?.aggregatedDiscountInfoV3
    return(
     <>
       <p className="position-absolute discount ms-2">{header} {subHeader}</p>
       <RestaurantCard {...props}/>
     </>
    )
  }
}

export default RestaurantCard;
