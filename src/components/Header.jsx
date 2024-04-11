import "../App.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="../Header.png" alt="" className="intibiome"/>
                    <img src="../ic.search.png" alt="" className="search" />
                </div>
                <nav className="menu">
                    <ul>
                        <a href="#about">About us ⌵ </a>
                        <li><a href="#products">Our Products ⌵ </a></li>
                        <li><a href="#discoveries">Intimate Health ⌵ </a></li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;