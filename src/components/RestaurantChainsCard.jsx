import { RES_URL } from "../utils/constants";


const RestaurantChainsCard = ({resData}) => {
  const { id, name, cloudinaryImageId, areaName, cuisines, avgRating } = resData?.info;
  
  return (
    <>
      <div className="w-[260px] bg-white p-3 rounded-lg shadow-lg shadow-slate-100 mb-3" key={id}>
        <div className="">
          <img
            src={RES_URL+cloudinaryImageId}
            className="object-cover rounded-2xl w-[22rem] h-[12rem]"
          />
        </div>
        <div className="mt-2">
          <p className="font-bold text-[17px] text-cyan-800 w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
          <p className="mt-1 text-gray-500 font-bold">
            <span>
              <i className="bi bi-star-fill text-green-800"></i>
            </span>{" "}
            <span>{avgRating}</span>{" "}
            <span><i className="bi bi-dot"></i></span><span>{resData?.info?.sla?.slaString}</span>
          </p>
          <p className="w-[200px] overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">{cuisines.join(",")}</p>
          <p className="areaName text-gray-500">{areaName}</p>
        </div>
      </div>
    </>
  );
};
export default RestaurantChainsCard;
