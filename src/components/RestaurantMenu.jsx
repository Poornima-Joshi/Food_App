import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        console.log(json);
        const menuData = json?.data?.cards[0]?.card?.card?.info
        setResInfo(menuData);
    }
    if(resInfo===null) return 'data';

    const {name,cuisines,areaName,sla} = resInfo;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <p>{areaName}, {sla?.lastMileTravel}</p>
        </div>
    )
}
export default RestaurantMenu;