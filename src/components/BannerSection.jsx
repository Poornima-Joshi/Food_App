import { useState,useEffect } from "react";
import { RES_API_URL } from "../utils/constants";
import BannerCard from "./BannerCard";


const BananerSection = () =>{
    const [bannerList,setBannerList] = useState([]);
    useEffect(()=>{
        fetchBannerData()
    },[])

    const fetchBannerData = async ()=>{
        const data = await fetch(RES_API_URL);
        const json = await data.json();
        setBannerList(json?.data.cards[0].card.card.imageGridCards.info)
    }
    return bannerList.length=== 0 ? <div>Loding...</div> :(
        <>
         <h4 className="tag-name">What's on your mind?</h4>
         <div className="menu-section">
            {bannerList.map((data)=>(
                    <BannerCard key={data.id} bannerData={data}/>
                ))}
         </div>
        </>
    )
}
export default BananerSection;