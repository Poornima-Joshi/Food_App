import { useState,useEffect } from "react";
import { RES_API_URL } from "./constants";

const useRestaurantMenu = () =>{
    const [resData,setResData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(RES_API_URL);
        const json = await data.json();
        setResData(json);
        
    }
    return resData;
}
export default useRestaurantMenu;


