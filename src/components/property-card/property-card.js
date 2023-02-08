import { Link, useNavigate } from "react-router-dom";
import "./property-card.css";
import PropertyAvailability from "../../globals/availability-enum";
import PropertyStatusBadge from "../property-status-badge/property-status-badge";

const PropertyCard = ({ id, availability, price, squareFeet, numberOfBedRooms, numberOfBathRooms, imageUrl }) => {
    const pathToHeart = "/property/" + id + "/heart";
    const pathThumbsDown = "/property/" + id + "/thumbs-down";
    const navigate = useNavigate();
    const propertyClicked = () => {
        navigate("/property-details/" + id);
    };

    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="property" onClick={propertyClicked}>
                <div className="property-img">
                    <img src={imageUrl} className="img-fluid" alt="" />
                    <div className="social">
                        <Link className="anchor heart" to={pathToHeart}><i className="bi bi-heart-fill"></i></Link>
                        <Link className="anchor thumbs-down" to={pathThumbsDown}><i className="bi bi-hand-thumbs-down"></i></Link>
                    </div>
                </div>

                <PropertyStatusBadge availability={availability}/>
                
                <div className="property-info">
                    <h4>${price.toLocaleString()}</h4>
                    <span>{squareFeet} sqft, {numberOfBedRooms} Beds, {numberOfBathRooms} Bath</span>
                </div>
            </div>
        </div>
    );
}
export default PropertyCard;