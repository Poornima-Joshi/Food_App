import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ResMenuShimmer from "./ResMenuShimmer";

const RestaurantMenus = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);
  
  const [showIndex, setShowIndex] = useState();

  if (menuData === null) return <ResMenuShimmer />;

  const { name, areaName, cuisines, sla, avgRating, totalRatingsString } =
    menuData?.data?.cards[0]?.card?.card?.info;

  const categories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) => {
        return (
          data?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <div className="max-w-4xl mx-auto py-12">
        <div className="flex justify-between  bg-white p-4 rounded-lg shadow-sm">
          <div>
            <p className="font-bold text-lg text-cyan-800 drop-shadow-sm">{name}</p>
            <p className=" text-gray-500">{cuisines.join(",")}</p>
            <p className="text-gray-500">
              {areaName}, {sla?.lastMileTravelString}
            </p>
          </div>
          <div className="bg-cyan-800 p-2 rounded-md">
            <div className="text-success rate-points text-center mb-1 text-green-100 font-bold">
              <i className="bi bi-star-fill text-green-300"></i> {avgRating}
            </div>
            <hr className="hr-card border-green-100" />
            <p className="mt-1 text-green-100 font-bold">{totalRatingsString}</p>
          </div>
        </div>

        <p className="py-5 text-xl font-bold  drop-shadow-sm">Menu</p>
        <div className="">
            {
              categories?.map((categories,index)=>(
                <RestaurantCategory key={categories?.card?.card?.title} data={categories?.card?.card}
                showItem={showIndex === index ? true:false}
                setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}
                />
                
              ))
            }
          </div>
      </div>
    </div>
  );
};
export default RestaurantMenus;
