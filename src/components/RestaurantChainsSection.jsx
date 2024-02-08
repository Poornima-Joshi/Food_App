import { useEffect, useState } from "react";
import RestaurantChainsCard from "./RestaurantChainsCard";
import useRestaurantData from "../utils/useRestaurantData";
import { Link } from "react-router-dom";
import RestaurantSkeleton from "./RestaurantSkeleton";

const RestaurantChainsSection = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [headerName,setHeaderName] = useState('');

  const resData = useRestaurantData();
  console.log(resData);

  useEffect(() => {
    const ResData =
      resData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const header = resData?.data?.cards?.[1].card?.card?.header;
    setHeaderName(header);
    
    setListOfRestaurant(ResData);
   
  }, [resData]);
  if (listOfRestaurant === null) return <RestaurantSkeleton />;

  // const fetchData = async () => {
  //   const data = await fetch(RES_API_URL,);
  //   const json = await data.json();

  //   const restaurant =
  //
  //   setListOfRestaurant(restaurant);
  //   setStoreData(restaurant);
  // };

  return (
    <>
      <div className="tag-container py-3">
        <h4 className="tag-name mb-0">{headerName?.title}</h4>
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
        {listOfRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            className="res-link "
            key={restaurant.info.id}
          >
            <RestaurantChainsCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default RestaurantChainsSection;
