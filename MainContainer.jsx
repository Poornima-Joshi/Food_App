import { BannerData, TopRestaurant } from "./data/bannerdata";

const MainContainer = () => {
  return (
    <>
      <div className="main bg-light">
        <div className="container">
          <div className="main-container">
            <h4 className="tag-name">What's on your mind?</h4>
            <div className="menu-section">
              {/* <div className="menu-card">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt="" />
                </div> */}
              {BannerData?.map((data) => {
                const { id, imageId } = data;
                // id = data.id;
                // imageId = data.imageId
                return (
                  <div className="menu-card" key={id}>
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                        imageId
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <h4 className="tag-name res-name">
              Top restaurant chains in Hyderabad
            </h4>
            <div className="res-section">
              {TopRestaurant?.map((item) => {
                const {
                  id,
                  name,
                  cloudinaryImageId,
                  areaName,
                  cuisines,
                  avgRatingString,
                } = item.info;

                return (
                  <div className="res-card" key={id}>
                    <div className="res-card-img">
                      <img
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
                        alt=""
                      />
                    </div>
                    <div className="res-card-footer">
                      <p className="restro-name">{name}</p>
                      <p className="res-rating">
                        <span>
                          <i class="bi bi-star-fill"></i>
                        </span>{" "}
                        <span>{avgRatingString}</span> <span>• {item.info.sla.slaString}</span>
                      </p>
                      <p className="cuisines">{cuisines.join(',')}</p>
                      <p className="areaName">{areaName}</p>
                    </div>
                  </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
