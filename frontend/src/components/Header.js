import logo from '../assets/images/nyc-logo.png';

function Header(){
    return(
        <nav className="nav-bar">
            <p><img src={logo} alt="logo" height="100" /></p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Header;
