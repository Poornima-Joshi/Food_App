import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearItem());
    }
    return(
        <div>
           <h1 className="text-center mt-4">Cart</h1>
           
           <div className="d-flex justify-content-center">
            <div className="w-50">
                <hr/>
                <button className="btn btn-dark" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty Add items to cart!</h1>}
               <ItemList item={cartItems}/>
            </div>
           </div>
        </div>
    )
}
export default Cart;