import { useEffect,useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        try {
            const data = await fetch(
               `https://api.allorigins.win/raw?url=${encodeURIComponent(
                 MENU_API_URL+resId
               )}`
             );
             const json = await data.json();
             setResInfo(json);
           } catch (error) {
             console.error("res data is not fetching", error);
           }
    };
    return resInfo;
}
export default useRestaurantMenu;