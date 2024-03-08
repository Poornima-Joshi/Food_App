import RestaurantSection from "./RestaurantSection";
import BananerSection from "./BannerSection";
import RestaurantChainsSection from "./RestaurantChainsSection";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import useRestaurantData from "../utils/useRestaurantData";
import BodyShimmer from "./BodyShimmer";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  const resData = useRestaurantData();
  if (resData === null) {
    return <BodyShimmer/>;
  }
  
  
  const bannerData = resData?.data?.cards?.[0]?.card?.card
  const restroData = resData;
  if (onlineStatus === false) {
    return (
      <Offline/>
    );
  }
  

  return (
    <main>
      <div className="max-w-7xl mx-auto px-10 py-5">
        <BananerSection data={bannerData}/>
        <RestaurantChainsSection data={restroData} />
        <RestaurantSection data={restroData} />
      </div>
    </main>
  );
};
export default Body;
