import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/bhartifoodlogo.png";

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.itemCount);

  return (
    <>
      <div className="shadow-lg  bg-white  sticky start-0 top-0 end-0 z-50">
        <nav className="flex justify-between px-8 items-center flex-wrap py-3 gap-5 max-w-7xl mx-auto ">
          <div className="flex items-center gap-4">
            <TiThMenu
              className="text-3xl cursor-pointer text-cyan-500 lg:hidden"
              onClick={() => setSideMenuOpen(true)}
            />
            <Link to="/">
              <img src={logo} alt="res-logo" width={"200px"} />
            </Link>
          </div>

          <ul className="hidden lg:flex gap-x-10">
            <li className="text-lg text-cyan-500 hover:text-cyan-600">
              <Link to="/">
                <i className="bi bi-house-check  text-cyan-700"></i> Home
              </Link>
            </li>
            <li className="text-lg text-cyan-500 hover:text-cyan-600">
              <Link to="/about">
                <i className="bi bi-file-person-fill  text-cyan-700"></i> About
              </Link>
            </li>
            <li className="text-lg text-cyan-500 hover:text-cyan-600">
              <Link to="/contact">
                <i className="bi bi-person-rolodex  text-cyan-700"></i> Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <Link to="/cart">
                <button className="px-3 hover:bg-cyan-800 hover:text-white  text-cyan-500 text-lg  py-[1px] rounded-[7px] border border-cyan-500 hover:border-cyan-800">
                  <i className="bi bi-cart3"></i>
                  <span className="">{cartItems}</span>
                </button>
              </Link>
            </div>
            <div>
              <button className="px-2 hover:bg-cyan-800 hover:text-white text-cyan-500 text-lg  py-[1px] rounded-[7px] border border-cyan-500 hover:border-cyan-800">
                Login
              </button>
            </div>
          </div>

          {/* side nav bar */}
          <div
            className={
              sideMenuOpen
                ? "fixed h-full w-screen lg:hidden  bg-black/50 backdrop-blur-sm top-0 right-0"
                : "hidden"
            }
          >
            <div className="text-black bg-slate-950 absolute left-0 top-0 h-screen z-50 w-1/3 flex flex-col items-center">
              <button
                className="text-center me-4 mt-4 mb-8 text-cyan-500 hover:text-cyan-800"
                onClick={() => setSideMenuOpen(false)}
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>
              <ul>
                <li className="mb-8 font-bold text-lg text-cyan-500 hover:text-cyan-600">
                  <Link
                    to="/"
                    className="no-underline"
                    onClick={() => setSideMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-8 font-bold text-lg text-cyan-500 hover:text-cyan-600 ">
                  <Link
                    to="/about"
                    className="no-underline font-bold"
                    onClick={() => setSideMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="font-bold text-lg text-cyan-500 hover:text-cyan-600">
                  <Link
                    to="/contact"
                    className="no-underline font-bold"
                    onClick={() => setSideMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
