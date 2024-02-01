import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-shadow">
        <div className="container">
          <div className="header-main-container">
            <div>
              <Link to="/">
                <img src={LOGO_URL} className="banner-logo" />
              </Link>
              <span className="logo-name">
                <a href="#">
                  <span className="city-name">Jubilee Hills </span>{" "}
                  <span className="name">
                    Aditya Enclave, Venkatagiri,Jub...
                  </span>
                  <i class="bi bi-chevron-down"></i>
                </a>
              </span>
            </div>
            <div>
              <ul className="list">
                <li className="list-item">
                  <Link to="/search" className="list-link">
                    <i className="bi bi-search list-icon"></i>{" "}
                    <span className="list-name"> Search</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/offers" className="list-link">
                    <i class="bi bi-octagon list-icon"></i>{" "}
                    <span className="list-name"> Offers</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/help" className="list-link">
                    <i class="bi bi-question-octagon list-icon"></i>{" "}
                    <span className="list-name"> Help</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/signIn" className="list-link">
                    <i class="bi bi-person list-icon"></i>{" "}
                    <span className="list-name"> Sign In</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/cart" className="list-link">
                    <i class="bi bi-bag list-icon"></i>{" "}
                    <span className="list-name"> Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
