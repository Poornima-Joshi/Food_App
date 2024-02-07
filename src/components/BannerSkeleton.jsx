const BannerSkeleton = () => {
  return (
    <>
      <div className="tag-container tag-skele">
        <h4 className="tag-skele-name"></h4>
        <div className="tag-btn">
          <button className="btn btn-link btn-lg p-0 me-2">
          <i className="bi bi-circle-fill"></i>
          </button>
          <button className="btn btn-link btn-lg p-0 ">
          <i className="bi bi-circle-fill"></i>
          </button>
        </div>
      </div>

      <div className="menu-section">
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      <div className="ban-skele-card"></div>
      </div>
    </>
  );
};
export default BannerSkeleton;
