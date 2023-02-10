import React from "react";
import Logo from '../Ticket-IT-logo[IST]-reverse+2.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa/";
function Topbar() {
    return (
        <>
            <nav className="navbar m-0 navbar-expand-lg px-5 ">
                <div className="container-fluid">
                <div className="social-links">
                    <ul className="d-flex">
                        <li className="me-3">
                            <a href="/"> <FaFacebookF /> </a>
                        </li>
                        <li className="me-3">
                            <a href="/"> <FaLinkedinIn /> </a>
                        </li>
                        <li className="me-3">
                            <a href="/"> <FaTwitter /> </a>
                        </li>
                        <li me-3>
                            <a href="/"> <FaYoutube /> </a>
                        </li>
                    </ul>
                </div>
                    
                <div className="nav-logo">
                    <img src={Logo} width="200px" alt="logo"></img>
                </div>
                        
        
                        <form className="d-flex">
                        <div className="demo">
                            <button className="btn btn py-3 px-4" type="submit">Login</button>
                            </div>
                        </form>
                   
                </div>
            </nav>
            
        </>
    );
}
export default Topbar;