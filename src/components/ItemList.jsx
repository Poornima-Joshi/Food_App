import { addItem} from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {item?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="mt-3 bg-slate-50 rounded shadow"
        >
          <div className="flex justify-between items-center  mb-4 p-4">
            <div className="w-[800px] pe-2">
              <p className="font-bold text-gray-700">
                {item?.card?.info?.name}
              </p>
              <p className=" text-gray-700">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.
                  defaultPrice/100
                  }
              </p>
              <p className="text-sm text-gray-400">
                {item?.card?.info?.description}
              </p>
            </div>
            <div>
              <div className="w-[150px] h-[100px] border rounded">
                <img
                  src={ITEM_URL + item?.card?.info?.imageId}
                  className="object-cover h-[100px] w-[150px] rounded"
                />
              </div>
              <button
                className="border p-1 w-full mt-1 text-white font-bold rounded bg-cyan-900 hover:bg-cyan-950"
                onClick={() => handelAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
