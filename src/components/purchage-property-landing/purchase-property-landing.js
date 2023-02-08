import { Link } from "react-router-dom";
import "./purchase-property-landing.css";
const PurchasePropertyLanding = ({propertyDetails}) => {
    
    //TODO: to take logged in user details
    //assume this is logged in user
    let customerDetails = {
        firstName: "John",
        lastName: "Beans",
    };

    return (
        <div id="cta" className="cta">
            <div className="container">
                <div className="text-center">
                    <h3>Hi, {customerDetails.firstName} {customerDetails.lastName}</h3>
                    <p> We have informed the seller about your interest to purchase this house. Please stay tunned until they see your offer and contact you.</p>
                    <Link className="cta-btn anchor" to="/main">Home</Link>
                </div>
            </div>
        </div>
    );
}
export default PurchasePropertyLanding;