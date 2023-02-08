const NavBar = () => {
    return <nav id="navbar" className="navbar">
        <ul>
            <li><Link className="nav-link scrollto active" to="homes/to-buy">Buy</Link></li>
            <li><Link className="nav-link scrollto" to="homes/for-rent">Rent</Link></li>
            <li><Link className="nav-link scrollto" to="homes/for-sale">Sell</Link></li>
            <li><Link className="nav-link scrollto" to="contact-us">Contact</Link></li>
            <li><Link className="anchor getstarted" to="login">Login</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
}

export default NavBar;