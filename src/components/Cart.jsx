import { useDispatch, useSelector } from "react-redux";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { addItem, clearItem } from "../utils/cartSlice";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart/>
      ) : (
        <div className="bg-slate-50">
          <div className="max-w-6xl mx-auto py-12">
            <div className="bg-white px-4 py-4 rounded shadow-sm">
              <h1 className="text-2xl font-serif font-bold text-cyan-950 drop-shadow-sm">
                Your Shoping Cart
              </h1>
              <hr className="border-cyan-950 mt-3" />

              <CartItems item={cartItems} />
              <hr className="border-cyan-950" />
              <Link to="/" c>
              <button className="px-2 hover:bg-cyan-800 hover:text-white text-cyan-500 text-lg  py-[1px] rounded-[4px] border border-cyan-500 hover:border-cyan-800">
              <IoChevronBackCircleSharp className="inline mb-1"/> Countinue Shopping
                </button>
              </Link>
              <button className="px-2 mt-3 ms-6 hover:bg-cyan-800 hover:text-white text-cyan-500 text-lg  py-[1px] rounded-[4px] border border-cyan-500 hover:border-cyan-800" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
