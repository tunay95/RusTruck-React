// import { useEffect,useState } from "react"; 
import hambMenu from "../../assets/Navbar-items/menu.png";
import search from "../../assets/Navbar-items/search.png";
import basket from "../../assets/Navbar-items/shopping-cart.png";
import wishlist from "../../assets/Navbar-items/love.png";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="container">
                <div className="burger-menu">
                    <img src={hambMenu} alt="" />
                </div>
                <div className="rustruck-logo-navbar">
                    <div className="square-logo"></div>
                    <h2 className="rustruck-h2">RUSTRUCK</h2>
                </div>
                <div className="pages-list-navbar">
                    <ul className="ul-pages-navbar">
                        <li className="about-us-navbar-li">
                            <a href="" className="about-us-a">About</a>
                            <div className="triangle-subcategory"></div>
                        </li>
                        <li className="media-navbar-li">
                            <a href="" className="media-a">Media</a>
                            <div className="triangle-subcategory"></div>
                        </li>
                        <li className="service-navbar-li">
                            <a href="" className="service-a">Service</a>
                        </li>
                        <li className="news-navbar-li">
                            <a href="" className="news-a">News</a>
                        </li>
                        <li className="contact-navbar-li">
                            <a href="" className="contact-a">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="container-2">
                    <form className="search-form">
                        <input type="text" className="search-bar-navbar" placeholder="Search..." />
                        <img className="search-icon" src={search} alt="" />
                    </form>
                    <div className="basket-navbar">
                        <img src={basket} alt="" />
                    </div>
                    <div className="wishlist-navbar">
                        <img src={wishlist} alt="" />
                    </div>
                        <div className="login-div">
                            <a href="" className="login-a">Login</a>
                        </div>
                        <div className="sign-up-div">
                            <a href="" className="sign-up-a">Sign Up</a>
                        </div>
                </div>
            </div>
        </nav>
    )
} 