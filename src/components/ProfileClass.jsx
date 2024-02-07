import React from "react";

class ProfileClass extends React.Component{
    constructor(){
        super();
        console.log('constructor');
    } 
     componentDidMount(){
        console.log("component Did mount");
     }
     componentWillUnmount(){
        console.log("component will Unmount")
     }
     render(){
        console.log("render")
        return(
            <div>
                <h2>Name : Poornima Joshi</h2>
                <h3>Location : Shahdol</h3>
            </div>
        )
     }
}
export default ProfileClass;