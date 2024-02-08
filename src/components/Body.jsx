import RestaurantSection from "./RestaurantSection";
import BananerSection from "./BannerSection";
import RestaurantChainsSection from "./RestaurantChainsSection";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <h1>Looks like you're offline!! Please check your interner connection;</h1>
    )
  }

  return (
    <main>
      <div className="main bg-white">
        <div className="container">
          <div className="main-container">
            <BananerSection/>
            <RestaurantChainsSection/>
            <RestaurantSection/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
