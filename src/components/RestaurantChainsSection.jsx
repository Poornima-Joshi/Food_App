import RestaurantChainsCard from "./RestaurantChainsCard";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RestaurantChainsSection = ({data}) => {
  const resData = data;
  const listOfRestaurant = resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const headerName = resData?.data?.cards?.[2]?.card?.card;

  const slideLeft = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
     <div className="flex justify-between items-center mt-8 mb-6">
      <h1 className="text-2xl font-bold ">{headerName?.title}</h1>
      <div>
        <button className="text-slate-500 hover:text-slate-600 text-2xl mr-2" onClick={slideLeft}><FaCircleChevronLeft /></button>
        <button className="text-slate-500 text-2xl hover:text-slate-600" onClick={slideRight}><FaCircleChevronRight /></button>
      </div>
      </div>

      <div className="flex gap-12 overflow-x-scroll scroll-smooth whitespace-nowrap" style={{scrollbarWidth:"none"}} id={"slider2"}>
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
