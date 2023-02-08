import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../globals/availability-enum";
import AddressCard from "../address-card/address-card";
import FilterBox from "../filter-box/filter-box";
import PropertyStatusBadge from "../property-status-badge/property-status-badge";
import "./property-details-card.css";

const PropertyDetailsCard = () => {

    const param = useParams();

    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);

    const propertyDetails = {
        id: param.id,
        availability: PropertyAvailability.Available,
        price: 550000,
        squareFeet: 10000,
        numberOfBedRooms: 3,
        numberOfBathRooms: 2,
        imageUrl: require("../../assets/img/houses/1200x800-1.jpg"),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
        location: {
            street: "1000 N 4th St",
            city: "Fairfield",
            state: "IA",
            zipCode: "52557",
        },
        sellerDetails: {
            email: "3g.mit02@gmail.com",
            phoneNumber: "+1 224 639 9556",
            address: {
                street: "1000 N 4th St",
                city: "Fairfield",
                state: "IA",
                zipCode: "52557",
            },
        }
    };

    const requestPurchaseClicked = () => {
        if (auth.isAuthenticated == true) {
            console.log("Hello world!");
            navigate("/purchase/" + param.id);
        }
        else {
            navigate("/login");
        }
    };

    return (
        <div id="property-details" className="property-details">
            <div className="container">
                <h1><Link to="/main" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
                <div className="row details-landing">
                    <div className="col-lg-6 align-self-baseline">
                        <img src={propertyDetails.imageUrl} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-4 pt-3 pt-lg-0 content">
                        <PropertyStatusBadge availability={propertyDetails.availability} />
                        <h2>${propertyDetails.price.toLocaleString()}</h2>
                        <p className="fst-italic">
                            <i className="bi bi-geo-alt-fill"></i> {propertyDetails.location.street}, {propertyDetails.location.city}, {propertyDetails.location.state}, {propertyDetails.location.zipCode}
                        </p>
                        <ul>
                            <li><i className="bx bx-check-double"></i> <strong>{propertyDetails.squareFeet} </strong> sqft </li>
                            <li><i className="bx bx-check-double"></i> <strong>{propertyDetails.numberOfBedRooms}</strong> bedrooms</li>
                            <li><i className="bx bx-check-double"></i> <strong>{propertyDetails.numberOfBathRooms}</strong> bathrooms</li>
                        </ul>
                        <p>
                            {propertyDetails.description}
                        </p>
                        {propertyDetails.availability != PropertyAvailability.Contingent &&
                            <button type="submit" onClick={requestPurchaseClicked}>Request Purchase</button>
                        }
                    </div>
                    <div className="col-lg-2">
                        <h2 className="seller-details"><strong>Seller Details</strong></h2>
                        <AddressCard
                            Address={propertyDetails.sellerDetails.address.street}
                            City={propertyDetails.sellerDetails.address.city}
                            State={propertyDetails.sellerDetails.address.state}
                            ZipCode={propertyDetails.sellerDetails.address.zipCode}
                            Email={propertyDetails.sellerDetails.email}
                            PhoneNumber={propertyDetails.sellerDetails.phoneNumber} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PropertyDetailsCard;