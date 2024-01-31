import { BannerData } from "../utils/mockData";
import BannerCard from "./BannerCard";


const BananerSection = () =>{
    return(
        <>
         <h4 className="tag-name">What's on your mind?</h4>
         <div className="menu-section">
            {BannerData.map((data)=>(
                    <BannerCard key={data.id} bannerData={data}/>
                ))}
         </div>
        </>
    )
}
export default BananerSection;