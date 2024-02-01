import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Help from "./components/Help";
import SignIn from "./components/SignIn";
import RestaurantMenu from "./components/RestaurantMenu";

import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";

const App = () =>{
    return(
        <div className="">
                <Header/>
                <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/search",
                element: <Search/>,
            },
            {
                path: "/offers",
                element: <Offers/>
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/signIn",
                element: <SignIn/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);