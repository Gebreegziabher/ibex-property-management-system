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
            </div>
        </footer>);
}

export default Footer;