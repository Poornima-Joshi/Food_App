import { useEffect, useState } from "react";
import RestaurantCard, { withDiscountCard } from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantSection = ({ data }) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [headerName, setHeaderName] = useState("");
  const [filData, setFilData] = useState({ Rating: "false", Offers: "false" });

  const RestaurantDiscount = withDiscountCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    const restaurant =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurant);
    setStoreData(restaurant);
    const header = data?.data?.cards?.[1]?.card?.card?.header;
    setHeaderName(header);
  };

  return (
    <>
      <div className="flex items-center justify-between mt-8 mb-6">
        <h4 className="text-2xl font-bold ">{headerName?.title}</h4>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="w-[400px]  relative">
            <input
              type="text"
              name="search-input"
              id="resSearch"
              placeholder="search"
              className="w-full px-2 py-2 border-2 border-slate-300 rounded shadow-sm  focus:outline-cyan-500 focus:text-cyan-500 focus:bg-slate-200"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="absolute right-2 top-2"
              onClick={() => {
                const search = listOfRestaurant.filter((data) => {
                  return data.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setStoreData(search);
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="">
            <input
              type="checkbox"
              className="appearance-none indeterminate:bg-gray-300"
              id="btn-check"
              onChange={(e) => {
                setFilData({
                  Rating: e.target.checked,
                  Offers: filData.Offers,
                });
              }}
            />
            <label
              className={
                filData.Rating === true
                  ? "px-2 py-2 border-2  text-cyan-500 border-cyan-500 rounded shadow-sm cursor-pointer bg-slate-200"
                  : "px-2 py-2 border-2 bg-white border-slate-300 rounded shadow-sm cursor-pointer"
              }
              htmlFor="btn-check"
              onClick={() => {
                if (filData.Rating !== true) {
                  const filterData = storeData.filter((data) => {
                    if (data.info.avgRating > 4) {
                      return data.info.avgRating;
                    } else if (
                      data.info.avgRating > 4 &&
                      data.info.aggregatedDiscountInfoV3 === true
                    ) {
                      return data.info.avgRating;
                    }
                    return null;
                  });
                  setStoreData(filterData);
                } else {
                  setStoreData(listOfRestaurant);
                }
              }}
            >
              Ratings 4.0+
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-12 flex-wrap">
        {storeData?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            className="duration-[0.5s] hover:duration-[0.5s] hover:scale-[0.9]"
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantDiscount resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
export default RestaurantSection;
