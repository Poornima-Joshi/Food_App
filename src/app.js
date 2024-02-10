import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//module
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Help from "./components/Help";
import SignIn from "./components/SignIn";
//import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMenus from "./components/RestaurantMenus";
import Children from "./components/Children";
import ProfileClass from "./components/ProfileClass";
import Error from "./components/Error";
//import Count from "./components/Count";
import UserContext from "./utils/UserContext";

const Count = lazy(() => import("./components/Count"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "poornima",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="">
        <UserContext.Provider value={{loggedInUser:"joshi"}}>
           <Header />
        </UserContext.Provider>
        
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
        children: [
          {
            path: "children",
            element: <Children />,
          },
        ],
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <ProfileClass />,
      },
      {
        path: "/count",
        element: (
          <Suspense fallback={<h1>Loding....</h1>}>
            <Count />
          </Suspense>
        ),
      },
      // {
      //     path: "/restaurants/:resId",
      //     element: <RestaurantMenu/>
      // },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenus />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
