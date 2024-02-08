
import BannerCard from "./BannerCard";
import BannerShimmer from "./BannerShimmer";
import useRestaurantData from "../utils/useRestaurantData";
import { useEffect, useState } from "react";

const BananerSection = () => {
  const [bannerInfo,setBannerInfo] = useState(null);

  const bannerList = useRestaurantData();
 
  useEffect(() => {
    const ResData = bannerList?.data?.cards?.[0]?.card?.card?.imageGridCards?.info
    setBannerInfo(ResData);
   
  },[bannerList])

  if(bannerInfo === null) return <BannerShimmer/>;
  
  return (
    <>
      <div className="tag-container">
        <h4 className="tag-name">What's on your mind?</h4>
        <div className="tag-btn">
          <button className="btn btn-link btn-lg p-0 me-2">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="btn btn-link btn-lg p-0 ">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>

      <div className="menu-section">
        {bannerInfo?.map((data) => (
          <BannerCard key={data?.id}  bannerData={data} />
        ))}
      </div>
    </>
  );
};
export default BananerSection;
