import RestaurantSection from "./RestaurantSection";
import BananerSection from "./BannerSection";
import RestaurantChainsSection from "./RestaurantChainsSection";

const Body = () => {
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
