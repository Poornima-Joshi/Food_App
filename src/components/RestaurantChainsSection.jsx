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
      resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const header = resData?.data?.cards?.[2]?.card?.card;
    console.log(header)
    setHeaderName(header);
    
    setListOfRestaurant(ResData);
   
  }, [resData]);
  if (listOfRestaurant === null) return <RestaurantSkeleton />;


  return (
    <>
      <div className="mt-8 mb-6">
        <h1 className="text-2xl font-bold">{headerName?.title}</h1>
      </div>

      <div className="flex gap-10 justify-between overflow-hidden">
        {listOfRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            className="duration-[0.5s] hover:duration-[0.5s] hover:scale-[0.9] "
            key={restaurant.info.id}
          >
            <RestaurantChainsCard resData={restaurant} />
          </Link>
        ))}
      </div>
      <hr className="mt-12 border-2"/>
    </>
  );
};
export default RestaurantChainsSection;
