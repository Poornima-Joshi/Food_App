import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";

const RestaurantSection = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    const json = await data.json();
    console.log(json);
    const restaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurant);
    setStoreData(restaurant);
  };

  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <div>loding</div>
      ) : (
        <>
          <div className="res-chain-container">
            <h4 className="tag-name res-name">
              Top restaurant chains in Hyderabad
            </h4>
            <div className="filter-container">
              <div className="search-box">
                <input
                  type="text"
                  name="search-input"
                  id="resSearch"
                  placeholder="search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <button
                  className="search-btn"
                  onClick={() => {
                    const search = listOfRestaurant.filter((data) => {
                      return data.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                    });
                    setStoreData(search);
                  }}
                >
                  <i class="bi bi-search"></i>
                </button>
              </div>
              <div className="filter ms-4">
                <button
                  className="filter-btn"
                  onClick={() => {
                    const filterData = listOfRestaurant.filter((data) => {
                      return data.info.avgRating > 4;
                    });
                    setListOfRestaurant(filterData);
                  }}
                >
                  Ratings 4.0+
                </button>
              </div>
            </div>
          </div>

          <div className="res-section">
            {storeData.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default RestaurantSection;
