import { Link } from "react-router-dom";
import emptycart from "../images/empty-cart.png"

const EmptyCart = () =>{
    return(
        <div className="bg-slate-50 h-[600px]">
           <div className="flex flex-col items-center justify-center h-[600px]">
            <div>
                <img src={emptycart} width={"260px"} height={"260px"} />
            </div>
            
            <p className="text-center mt-2 font-bold text-slate-700 text-xl">Your cart is empty</p>
            <p className="text-slate-500 mt-1">You can go to home page to view more restaurants</p>
            <Link to="/" className="mt-5 border p-2 px-4 rounded-lg bg-orange-600 text-white font-bold">SEE RESTAURANTS NEAR YOU</Link>
           </div>
        </div>
    )
}
export default EmptyCart;