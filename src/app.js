import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

//module
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
//import RestaurantMenu from "./components/RestaurantMenu";
//import RestaurantMenus from "./components/RestaurantMenus";
import Children from "./components/Children";
import ProfileClass from "./components/ProfileClass";
import Error from "./components/Error";
//import Count from "./components/Count";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { useDispatch } from "react-redux";
import Footer from "./components/footer";


const RestaurantMenus = lazy(() => import("./components/RestaurantMenus"));
const About = lazy(()=>import("./components/About"))

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "poornima",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="">
          <Header />
          <div className="min-h-[85dvh] bg-slate-50">
          <Outlet />
          </div>
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/contact",
        element: <Contact />,
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
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense>
            <RestaurantMenus />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
