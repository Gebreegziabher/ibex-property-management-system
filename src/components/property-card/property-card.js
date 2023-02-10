import { Link, useNavigate } from "react-router-dom";
import "./property-card.css";
import PropertyStatusBadge from "../property-status-badge/property-status-badge";

const PropertyCard = ({ property }) => {
    const pathToHeart = "/property/" + property.id + "/heart";
    const pathThumbsDown = "/property/" + property.id + "/thumbs-down";
    const navigate = useNavigate();
    const propertyClicked = () => {
        navigate("/property-details/" + property.id);
    };

    const image = require("../../assets/img/houses/1200x800-1.jpg");

    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="property" onClick={propertyClicked}>
                <div className="property-img">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="social">
                        <Link className="anchor heart" to={pathToHeart}><i className="bi bi-heart-fill"></i></Link>
                        <Link className="anchor thumbs-down" to={pathThumbsDown}><i className="bi bi-hand-thumbs-down"></i></Link>
                    </div>
                </div>

                <PropertyStatusBadge availability={property.status}/>
                
                <div className="property-info">
                    <h4>${property.price.toLocaleString()}</h4>
                    <span>{property.lotSize} sqft, {property.numberOfBedRooms} Beds, {property.numberOfBaths} Baths</span>
                </div>
            </div>
        </div>
    );
}
export default PropertyCard;