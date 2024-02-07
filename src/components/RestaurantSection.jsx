import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantSection = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [filData, setFilData] = useState({ Rating: "false", Pureveg: "false" });
  // const [page, setPage] = useState(1);
  

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleInfiniteScroll);
  //   };
  // }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    //const data = await fetch(RES_API_URL + `&page=${page}`);
    const json = await data.json();
    const restaurant =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
    // setListOfRestaurant((prev) => [...prev, ...restaurant]);
    // setStoreData((prev) => [...prev, ...restaurant]);
    setListOfRestaurant(restaurant);
    setStoreData(restaurant);
  };
  // const handleInfiniteScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <div>loding</div>
      ) : (
        <>
          <h4 className="tag-name res-name pb-3 pt-4">
            Restaurants with online food delivery in Hyderabad
          </h4>

          <div className="filter-container pb-4">
            <div className="search-box">
              <input
                type="text"
                name="search-input"
                id="resSearch"
                placeholder="search"
                className=""
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
            <div className="filter ms-3">
              <input
                type="checkbox"
                className="btn-check"
                id="btn-check"
                onChange={(e) => {
                  setFilData({
                    Rating: e.target.checked,
                    Pureveg: filData.Pureveg,
                  });
                  console.log(filData);
                }}
              />
              <label
                className="btn btn-light border"
                htmlFor="btn-check"
                onClick={() => {
                  if (filData.Rating !== true) {
                    const filterData = listOfRestaurant.filter((data) => {
                      return data.info.avgRating > 4;
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
                  setFilData(e.target.checked);
                }}
              />
              <label
                className="btn btn-light border"
                htmlFor="btn-check-offers"
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

          <div className="res-section">
            {storeData.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                className="res-link"
                key={restaurant.info.id}
              >
                <RestaurantCard  resData={restaurant} />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default RestaurantSection;
