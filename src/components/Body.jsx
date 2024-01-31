import RestaurantSection from "./RestaurantSection";
import BananerSection from "./BannerSection";

const Body = () => {
  return (
    <main>
      <div className="main bg-light">
        <div className="container">
          <div className="main-container">
            <BananerSection/>
            <RestaurantSection/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
