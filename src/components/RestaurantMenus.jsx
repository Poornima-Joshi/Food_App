import { useParams } from "react-router-dom";
import RestaurantSkeleton from "./RestaurantSkeleton";
import { Link,Outlet } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenus = () => {
  const { resId } = useParams();
  
  const menuData = useRestaurantMenu(resId);

  
  if(menuData===null) return <RestaurantSkeleton/>;

  const { name, areaName, cuisines, sla, avgRating, totalRatingsString } =
    menuData?.data?.cards[0]?.card?.card?.info;
    
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="res-menu">
          <div className="res-menu-card">
            <div className="res-card-menu">
              <div className="card-info">
                <p className="card-info-name mb-0">{name}</p>
                <p className="mb-0 menu-cusines">{cuisines.join(",")}</p>
                <p className="menu-areaname mb-0">
                  {areaName}, {sla?.lastMileTravel}
                </p>
              </div>
              <div className="card-rating">
                <div className="text-success rate-points">
                  <i className="bi bi-star-fill "></i> {avgRating}
                </div>
                <hr className="hr-card" />
                <p className="rate-k mb-0">{totalRatingsString}</p>
                <Link to="children">children</Link>
              </div>
            </div>
            {/* <p className="menu-info mb-0"><i className="bi bi-info-circle-fill "></i> Far (5 kms) | Additional delivery fee will apply</p> */}
          </div>
        </div>
      </div>
     
    </>
  );
};
export default RestaurantMenus;
