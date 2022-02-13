import React from "react";
import banner from "../assets/food.jpeg"
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})` }}>
            <div className="headerContainer">
                <h1> home</h1>
                <p> FOOD AT A CLICK</p>


                <button>Order Now</button>

            </div>
        </div>
    )
}
export default Home