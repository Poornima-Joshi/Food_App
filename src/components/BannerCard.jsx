import { BANNER_URL } from "../utils/constants";

const BannerCard = (props) => {
  const { bannerData } = props;
  const {imageId} = bannerData;
 
  return (
    <>
      <div className="menu-card w-[8rem] flex-none shadow-sm rounded">
        <div>
         <img
          src={BANNER_URL+imageId}
          className="object-cover rounded "
         />
        </div>
      </div>
    </>
  ); 
};
export default BannerCard;
