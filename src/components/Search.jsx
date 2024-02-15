import { Link,Outlet } from "react-router-dom";
import React from "react";

const Search= ()=>{
    
    return(
        <div>
            <h1>search</h1>
            <Link to="/search"><h1>search</h1></Link>
            <Link to="children"><h2>children</h2></Link>
            <Outlet/>
        </div>
    )
}
export default Search;



