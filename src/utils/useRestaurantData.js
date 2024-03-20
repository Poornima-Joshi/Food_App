import { useState, useEffect } from "react";
import { RES_API_URL,SWIGGY_API } from "./constants";

const useRestaurantData = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     const data = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          RES_API_URL
        )}`
      );
      const json = await data.json();
      setResData(json);
    } catch (error) {
      console.error("res data is not fetching", error);
    }
  };
  return resData;
};
export default useRestaurantData;
