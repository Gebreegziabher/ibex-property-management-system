import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../globals/availability-enum";
import AddressCard from "../address-card/address-card";
import PropertyStatusBadge from "../property-status-badge/property-status-badge";
import "./property-details-card.css";

const PropertyDetailsCard = () => {

    const param = useParams();

    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);

    const [property, setProperty] = useState(null);

    const fetchProperty = () => {
        axios.get("properties/" + param.id).then(response => {
            setProperty(response.data);
        }).catch(error => console.log(error.message));
    };

    useEffect(() => fetchProperty(), []);

    const image = require("../../assets/img/houses/1200x800-1.jpg");

    const requestPurchaseClicked = () => {
        if (auth.isAuthenticated == true) {
            navigate("/property/" + param.id + "/proposed-price");
        }
        else {
            navigate("/login");
        }
    };

    let display = null;

    if (property != null) {
        display = <div id="property-details" className="property-details">
            <div className="container">
                <h1><Link to="/main" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
                <div className="row details-landing">
                    <div className="col-lg-6 align-self-baseline">
                        <img src={image} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-4 pt-3 pt-lg-0 content">
                        <PropertyStatusBadge availability={property.status} />
                        <h2>${property.price.toLocaleString()}</h2>
                        <p className="fst-italic">
                            <i className="bi bi-geo-alt-fill"></i> {property.address.street}, {property.address.city}, {property.address.state}, {property.address.zipCode}
                        </p>
                        <ul>
                            <li><i className="bx bx-check-double"></i> <strong>{property.lotSize} </strong> sqft </li>
                            <li><i className="bx bx-check-double"></i> <strong>{property.numberOfBedRooms}</strong> bedrooms</li>
                            <li><i className="bx bx-check-double"></i> <strong>{property.numberOfBaths}</strong> bathrooms</li>
                        </ul>
                        <p>
                            {property.description}
                        </p>
                        {
                            auth.userDetails.id != property.seller.id &&
                            property.status != PropertyAvailability.Contingent &&
                            <button type="submit" onClick={requestPurchaseClicked}>Request Purchase</button>
                        }
                    </div>
                    {
                        property.seller != undefined && property.seller.address != null &&
                        <div className="col-lg-2">
                            <h2 className="seller-details"><strong>Seller Details</strong></h2>
                            <AddressCard
                                Address={property.seller.address.street}
                                City={property.seller.address.city}
                                State={property.seller.address.state}
                                ZipCode={property.seller.address.zipCode}
                                Email={property.seller.email}
                                PhoneNumber={property.seller.phoneNumber} />
                        </div>
                    }
                </div>
            </div>
        </div>;
    }

    return display;
}

export default PropertyDetailsCard;