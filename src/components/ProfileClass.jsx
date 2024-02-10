import React from "react";
import UserContext from "../utils/UserContext";

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
                <h2>Login user name</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) =>(
                        <h2>Name: {loggedInUser}</h2>
                    )}
                </UserContext.Consumer>
                <h3>Location : Shahdol</h3>
            </div>
        )
     }
}
export default ProfileClass;