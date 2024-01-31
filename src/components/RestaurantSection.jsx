import { TopRestaurant } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const RestaurantSection = () => {
   let TopRestaurant = [
    {info: {
      id: "344287",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "6482",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        slaString: "25-30 mins",
      },
    }},
    {info: {
      id: "344288",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "6482",
      avgRatingString: "3",
      totalRatingsString: "10K+",
      sla: {
        slaString: "25-30 mins",
      },
    }},
    
    
  ]
   return (
    <>
      <h4 className="tag-name res-name">Top restaurant chains in Hyderabad</h4>
      <div className="filter mb-3">
        <button className="filter-btn"
          onClick={()=>{
            TopRestaurant = TopRestaurant.filter(
                (res) => res.info.avgRatingString > 4
            );
            console.log(TopRestaurant);
          }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-section">
      {TopRestaurant.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
      ))}
      </div>
    </>
  );
};
export default RestaurantSection;