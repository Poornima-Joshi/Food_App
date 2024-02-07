import { useEffect, useState } from "react";
import RestaurantChainsCard from "./RestaurantChainsCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import RestaurantSkeleton from "./RestaurantSkeleton";

const RestaurantChainsSection = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL,);
    const json = await data.json();
   
    const restaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurant);
    setStoreData(restaurant);
  };

  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <RestaurantSkeleton/>
      ) : (
        <>
       
          <div className="tag-container py-3">
            <h4 className="tag-name mb-0">
            Top restaurant chains in Hyderabad
            </h4>
            <div className="tag-btn">
          <button className="btn btn-link btn-lg p-0 me-2">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="btn btn-link btn-lg p-0 ">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
          </div>

          <div className="res-overflow">
            {listOfRestaurant.map((restaurant) => (
              <Link to={"/restaurants/"+restaurant.info.id} className="res-link" key={restaurant.info.id}><RestaurantChainsCard  resData={restaurant} /></Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default RestaurantChainsSection;
