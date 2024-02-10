import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
  
 
  handleClick=()=>{
    setShowIndex();
  }

  return (
    <div>
      {/* header */}
      <div className="border py-2 px-1  border-5 border-top-0 border-start-0 border-end-0 mb-2   border-secodary bg-light shadow-sm">
        <div className="d-flex justify-content-between c-pointer" onClick={handleClick}>
          <span className="fw-bold fs-4 mb-2">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItem &&  <ItemList item={data.itemCards} />}
       
        {/* body */}
      </div>
    </div>
  );
};
export default RestaurantCategory;
