import { ITEM_URL } from "../utils/constants";
import { MdDeleteForever } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity,removeItem } from "../utils/cartSlice";

const CartItems = ({ item }) => {
  
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item?.card?.info?.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item?.card?.info?.id));
  };

  const calculatePrice = (item) => {
    const basePrice = item?.card?.info?.price || item?.card?.info?.defaultPrice;
    return (basePrice / 100) * item?.quantity;
  };

  const calculateTotalAmount = (item) => {
    let totalAmount = 0;
    item.forEach(item => {
      const basePrice = item?.card?.info?.price || item?.card?.info?.defaultPrice;
      totalAmount += (basePrice / 100) * item?.quantity;
    });
    return totalAmount;
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item?.card?.info?.id));
  };


  return (
    <table className="table w-full">
      <thead>
        <tr className="">
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 w-1/5">
            Name
          </th>
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 w-1/5">
            Image
          </th>
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 w-1/5">
            Unit Price
          </th>
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 w-1/5">
            Quantity
          </th>
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 w-1/5">
            Total Price
          </th>
          <th className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-700 "></th>
          
        </tr>
      </thead>
      <tbody>
        {item?.map((item) => (
          <tr key={item?.card?.info?.id}>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-500 text-bold">
            {item?.card?.info?.name}
            </td>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left">
              <div className="w-[80px] h-[70px] rounded rounded-full">
              <img
                  src={ITEM_URL + item?.card?.info?.imageId}
                  className="object-cover h-[70px] w-[80px] rounded rounded-full"
                />
              </div>
            </td>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-500 text-bold">
            ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice/100}
            </td>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left ">
              <div className="border w-[110px] flex justify-between items-center py-1 px-4 rounded">
                <button className="text-sm text-cyan-500" onClick={()=>handleDecrement(item)}>
                  <TiMinus />
                </button>
                <span className="text-sm text-cyan-800 font-bold">{item.quantity}</span>
                <button onClick={()=>handleIncrement(item)}>
                  <FaPlus className="text-xs text-cyan-700" />
                </button>
              </div>
            </td>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-slate-500 text-bold">
            ₹{calculatePrice(item)}
            </td>
            <td className="border border-cyan-500 border-x-0 border-t-0 py-1 text-left text-red-600 text-bold">
              <button onClick={()=>handleDelete(item)}><MdDeleteForever /></button>
            </td>
            
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={4}
            className=" border-x-0 border-y-0 py-1  text-slate-700 font-bold"
          >
            To Pay
          </td>
          <td 
          colSpan={2}
          className=" border-x-0 border-y-0 py-1  text-slate-700 font-bold">
          ₹ {calculateTotalAmount(item)}
          </td>
        </tr>
      </tfoot>
    </table>

   
  );
};
export default CartItems;
