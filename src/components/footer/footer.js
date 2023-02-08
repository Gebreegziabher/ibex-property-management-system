import { Link } from "react-router-dom";
import { Address, City, Country, Email, PhoneNumber, State, SystemName, ZipCode } from "../../globals/common-names";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6 footer-contact">
                            <h3>{SystemName} Important Info</h3>
                            <p>
                                {Address} <br />
                                {City}, {State} {ZipCode}<br />
                                {Country} <br /><br />
                                <strong>Phone:</strong> {PhoneNumber}<br />
                                <strong>Email:</strong> {Email}<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link className="anchor" to="main">Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link className="nav-link scrollto" to="homes/for-rent">Rent</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link className="nav-link scrollto" to="homes/for-sale">Sell</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link className="nav-link scrollto" to="contact-us">Contact</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link className="nav-link scrollto" to="login">Login</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>Do you want to know about the release of our new features and services? </p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>{SystemName}</span></strong>.
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>);
}

export default Footer;