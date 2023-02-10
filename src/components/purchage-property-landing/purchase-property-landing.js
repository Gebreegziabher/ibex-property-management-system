import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./purchase-property-landing.css";
const PurchasePropertyLanding = ({propertyDetails}) => {

    const auth = useSelector(state => state.auth);
    
    let customerDetails = {
        firstName: auth.userDetails.firstName,
        lastName: auth.userDetails.lastName,
    };

    return (
        <div id="cta" className="cta">
            <div className="container">
                <div className="text-center">
                    <h3>Hi, {customerDetails.firstName} {customerDetails.lastName}</h3>
                    <p> We have informed the seller about your interest to purchase this house. Please stay tunned until they see your offer and contact you.</p>
                    <Link className="cta-btn anchor" to="/main">Take me Home</Link>
                </div>
            </div>
        </div>
    );
}
export default PurchasePropertyLanding;