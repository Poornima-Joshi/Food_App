import { useState, useEffect } from "react";
import { RES_API_URL } from "../utils/constants";
import BannerCard from "./BannerCard";
import BannerSkeleton from "./BannerSkeleton";

const BananerSection = () => {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    fetchBannerData(); 
  }, []);

  const fetchBannerData = async () => {
    const data = await fetch(RES_API_URL);
    const json = await data.json();
    setBannerList(json?.data.cards[0].card.card.imageGridCards.info);
  };
  
  return bannerList.length === 0 ? (
    <BannerSkeleton/>
  ) : (
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
        {bannerList.map((data) => (
          <BannerCard key={data.id} bannerData={data} />
        ))}
      </div>
    </>
  );
};
export default BananerSection;
