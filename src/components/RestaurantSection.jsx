import { TopRestaurant } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const RestaurantSection = () => {
  return (
    <>
      <h4 className="tag-name res-name">Top restaurant chains in Hyderabad</h4>
      <div className="res-section">
      {TopRestaurant.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
      ))}
      </div>
    </>
  );
};
export default RestaurantSection;