import React , {Fragment} from "react";
import '../Style/HomePage.css';
import Navigation from "./Navigation";
const HomePage = () =>
{
    return(
        <>
        <div className="nav">
            <Navigation />
        </div>
        <div className="container1">Hello</div>
        </>
    );
}
export default HomePage;