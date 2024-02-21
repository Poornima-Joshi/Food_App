import RestaurantSection from "./RestaurantSection";
import BananerSection from "./BannerSection";
import RestaurantChainsSection from "./RestaurantChainsSection";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <Offline/>
    );
  }

  return (
    <main className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-10 py-5">
        <BananerSection />
        <RestaurantChainsSection />
        <RestaurantSection />
      </div>
    </main>
  );
};
export default Body;
