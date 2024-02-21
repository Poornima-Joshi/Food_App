import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withDiscountCard } from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestaurantSection = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [filData, setFilData] = useState({ Rating: "false", Offers: "false" });

  const RestaurantDiscount = withDiscountCard(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);

    const json = await data.json();
    const restaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurant);
    setStoreData(restaurant);
    console.log(restaurant);
  };

  return (
    <>
      {listOfRestaurant?.length === 0 ? (
        <div>loding</div>
      ) : (
        <>
          <h4 className="text-2xl font-bold mt-8 mb-6">
            Restaurants with online food delivery in Hyderabad
          </h4>

          <div className="flex items-center mb-5 gap-5 flex-wrap">
            {/* <div>
              <label>UserName:</label>
              <input
                type="text"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div> */}
            <div className="w-[400px]  relative">
              <input
                type="text"
                name="search-input"
                id="resSearch"
                placeholder="search"
                className="w-full px-2 py-2 border-2 border-slate-300 rounded shadow-sm  focus:outline-cyan-500"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  console.log(e.target.value);
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
            {/* <div className="filter ms-3">
              <button
                className="filter-btn"
                onClick={() => {
                  const filterData = listOfRestaurant.filter((data) => {
                    return data.info.avgRating > 4;
                  });
                  setStoreData(filterData);
                }}
              >
                Ratings 4.0+
              </button>
            </div> */}
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
                  console.log(filData);
                }}
              />
              <label
                className={filData.Rating === true ? "px-2 py-2 border-2 bg-white border-cyan-500 rounded shadow-sm": "px-2 py-2 border-2 bg-white border-slate-300 rounded shadow-sm"}
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
            <div className="filter ms-3">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-pure"
              />
              <label
                className="btn btn-light border"
                htmlFor="btn-check-pure"
                // onClick={() => {
                //   if(filData.Pureveg!==true){
                //     const filterData = listOfRestaurant.filter((data) => {
                //       return data.info.badges.imageBadges[0].description === "pureveg";
                //     });
                //     setStoreData(filterData);
                //   }
                //   else{
                //     setStoreData(listOfRestaurant);
                //   }

                // }}
              >
                Pure Veg
              </label>
            </div>
            <div className="filter ms-3">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-offers"
                onChange={(e) => {
                  setFilData({
                    Rating: filData.Rating,
                    Offers: e.target.checked,
                  });
                }}
              />
              <label
                className="btn btn-light border"
                htmlFor="btn-check-offers"
                onClick={() => {
                  if (filData.Offers !== true) {
                    const offersData = storeData.filter((data) => {
                      return data.info.aggregatedDiscountInfoV3;
                    });
                    setStoreData(offersData);
                  } else {
                    setStoreData(listOfRestaurant);
                  }
                }}
              >
                Offers
              </label>
            </div>
            <div className="filter ms-3">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-above"
                onChange={(e) => {
                  setFilData(e.target.checked);
                }}
              />
              <label className="btn btn-light border" htmlFor="btn-check-above">
                Rs. 300-Rs. 600
              </label>
            </div>
            <div className="filter ms-3">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check-less"
                onChange={(e) => {
                  setFilData(e.target.checked);
                }}
              />
              <label className="btn btn-light border" htmlFor="btn-check-less">
                Less than Rs. 300
              </label>
            </div>
          </div>

          <div className="flex gap-10 flex-wrap">
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
      )}
    </>
  );
};
export default RestaurantSection;
