import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import MainContainer from "./MainContainer";

const App = () =>{
    return(
        <div className="">
            <header>
                <HeaderComponent/>
            </header>
            <section>
                <main>
                  <MainContainer/>
                </main>
            </section>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);