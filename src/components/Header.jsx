import React, { useState } from "react";
import "../App.css";

function Header() {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const [isSubMenu2Visible, setSubMenu2Visible] = useState(false);
    const [isSubMenu3Visible, setSubMenu3Visible] = useState(false);

    return (
        <header className="header" >
            <div className="container">
                <div className="logo">
                    <img src="../Header.png" alt="" className="intibiome"/>
                    <img src="../ic.search.png" alt="" className="search" />
                </div>
                <nav className="menu">
                    <ul>
                        <li onMouseEnter={() => setSubMenuVisible(true)} onMouseLeave={() => setSubMenuVisible(false)}><a href="#about">About us ⌵ </a></li>
                        <li onMouseEnter={() => setSubMenu2Visible(true)} onMouseLeave={() => setSubMenu2Visible(false)} ><a href="#products">Our Products ⌵ </a></li>
                        <li onMouseEnter={() => setSubMenu3Visible(true)} onMouseLeave={() => setSubMenu3Visible(false)}><a href="#discoveries">Intimate Health ⌵ </a></li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
            {isSubMenuVisible && (
                <div className="submenu">
                    <div className="submenu-container">
                    <ul>
                        <li><a href="#new-option">brand philosophy</a></li>
                        <li><a href="#new-option">product technology</a></li>
                    </ul>
                    </div>
                </div>
            )}

            {isSubMenu2Visible && (
                <div className="submenu">
                    <div className="submenu-container">
                    <ul>
                        <li><a href="#new-option">all products</a></li>
                        <li><a href="#new-option">intibiome wellness</a></li>
                        <li><a href="#new-option">intibiome active</a></li>
                        <li><a href="#new-option">intibiome agecare</a></li>
                    </ul>
                    </div>
                </div>
            )}

            {isSubMenu3Visible && (
                <div className="submenu">
                    <div className="submenu-container">
                    <ul>
                        <li><a href="#new-option">article 1</a></li>
                        <li><a href="#new-option">article 2</a></li>
                        <li><a href="#new-option">article 3</a></li>
                        <li><a href="#new-option">faq</a></li>
                    </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
