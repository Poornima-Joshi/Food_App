import ItemList from "./ItemList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
  
 
  handleClick=()=>{
    setShowIndex();
  }

  return (
    <div>
      {/* header */}
      <div className="bg-white py-4 px-4 mb-3 rounded-md">
        <div className="flex justify-between cursor-pointer items-center" onClick={handleClick}>
          <span className="font-bold text-lg text-cyan-800 drop-shadow-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span><MdOutlineKeyboardArrowDown className="text-2xl font-bold text-cyan-800"/></span>
        </div>
        {showItem &&  <ItemList item={data.itemCards} />}
       
        {/* body */}
      </div>
    </div>
  );
};
export default RestaurantCategory;
