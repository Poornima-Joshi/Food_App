import { BANNER_URL } from "../utils/constants";

const BannerCard = (props) => {
  const { bannerData } = props;
  const {imageId} = bannerData;
 
  return (
    <>
      <div className="menu-card">
        <img
          src={BANNER_URL+imageId}
        />
      </div>
    </>
  ); 
};
export default BannerCard;
