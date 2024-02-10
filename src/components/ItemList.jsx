import { ITEM_URL } from "../utils/constants";

const ItemList = ({item}) =>{
    console.log(item);
    
    return(
        <div>
            {
                item?.map((item)=>(
                    <div key={item?.card?.info?.id}>
                        <div className="d-flex justify-content-between border border-1 border-top-0 border-start-0 border-end-0 mb-2 p-3 border-dark">
                            <div>
                                <p className="mb-0 fw-bold">{item?.card?.info?.name}</p>
                                <p>₹{item?.card?.info?.price/100}</p>
                                <p className="w-75">{item?.card?.info?.description}</p>
                            </div>
                            <div style={{width:'150px',height:"100px"}} className="">
                                <img src={ITEM_URL+item?.card?.info?.imageId} style={{width:'150px',height:"85px"}}  />
                                <button className="btn btn-outline-success w-100 btn-sm mt-1 fw-bold">Add +</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ItemList;