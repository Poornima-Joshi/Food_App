import BannerCard from "./BannerCard";
import BannerShimmer from "./BannerShimmer";
import useRestaurantData from "../utils/useRestaurantData";
import { useEffect, useState } from "react";

const BananerSection = () => {
  const [bannerInfo, setBannerInfo] = useState(null);

  const bannerList = useRestaurantData();

  useEffect(() => {
    const ResData =
      bannerList?.data?.cards?.[0]?.card?.card?.imageGridCards?.info;
    setBannerInfo(ResData);
  }, [bannerList]);

  if (bannerInfo === null) return <BannerShimmer />;

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">What's on your mind?</h1>

      <div className="flex overflow-hidden gap-6">
        {bannerInfo?.map((data) => (
          <BannerCard key={data?.id} bannerData={data} />
        ))}
      </div>
      <hr className="mt-12 border-2"/>
    </>
  );
};
export default BananerSection;
