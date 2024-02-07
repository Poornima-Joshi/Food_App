import { useEffect, useState } from "react";


const Count = () =>{
    const [click,setClick] = useState(0);
    const [evenNum,setEvenNum] = useState(0);
    
    useEffect(()=>{
     if(click%2 === 0){
        setEvenNum(click);
     }
    },[click])

    const handleClick = () =>{
      setClick(click+1)
    }
    return(
        
        <>
        <div className="d-flex justify-content-center">
            <div>
            <h1>Increase Number  {click}</h1>
            <h2>Even Number {evenNum}</h2>
            <button onClick={handleClick} className="btn btn-danger">+</button>
            </div>
        </div>
        </>
    )
}
export default Count;