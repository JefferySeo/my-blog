import React from 'react';
import logo from "../../img/logo.png";
import './footer.css';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img flogo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>&copy; 2023. All right reserved. design by Jeffery</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;