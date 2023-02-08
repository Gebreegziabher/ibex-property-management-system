import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../../../globals/availability-enum";
import OfferAcceptanceStatus from "../../../../globals/offer-acceptance-status";

const DeleteProperty = () => {

    const param = useParams();

    const navigate = useNavigate();

    const [property, setProperty] = useState({});

    const fetchProperty = () => {

        //TODO: to fetch from database

        setProperty({
            id: 1,
            houseNumber: "RM 435",
            availability: PropertyAvailability.Available,
            acceptance: OfferAcceptanceStatus.Pending,
            price: 550000,
            squareFeet: 10000,
            numberOfBedRooms: 3,
            numberOfBathRooms: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
            sellerId: 1,
            location: {
                street: "1000 N 4th St",
                city: "Fairfield",
                state: "IA",
                zipCode: "52557",
            }
        });
    };

    useEffect(() => fetchProperty(), []);

    const deleteProperty = () => {

        //TODO: delete in database

        navigate("/seller-dashboard");
    }

    return (
        <div className="container">
            <h1><Link to="/seller-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="alert alert-danger" role="alert">
                Are you sure you want to remove a property with number <strong>{property.houseNumber}</strong>?
                <br /><br />
                <button type="button" className="btn btn-danger" title="Delete record" onClick={deleteProperty}>
                    Yes, delete it
                </button>
            </div>
        </div>
    );
};
export default DeleteProperty;