const HeaderComponent = () => {
  return (
    <>
      <div className="header-shadow">
        <div className="container">
          <div className="header-main-container">
            <div>
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"
                className="banner-logo"
              />
              <span className="logo-name">
                <a href="#">
                  <span className="city-name">Jubilee Hills </span> <span className="name">Aditya Enclave, Venkatagiri,Jub...</span>
                  <i class="bi bi-chevron-down"></i>
                </a>
              </span>
            </div>
            <div>
              <ul className="list">
                <li className="list-item">
                  <a href="#" className="list-link">
                    <i className="bi bi-search list-icon"></i>{" "}
                    <span className="list-name"> Search</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="list-link">
                    <i class="bi bi-octagon list-icon"></i>{" "}
                    <span className="list-name"> Offers</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="list-link">
                    <i class="bi bi-question-octagon list-icon"></i>{" "}
                    <span className="list-name"> Help</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="list-link">
                    <i class="bi bi-person list-icon"></i>{" "}
                    <span className="list-name"> Sign In</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="list-link">
                    <i class="bi bi-bag list-icon"></i>{" "}
                    <span className="list-name"> Cart</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default HeaderComponent;
