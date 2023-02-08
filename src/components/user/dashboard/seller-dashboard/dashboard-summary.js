import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PropertyAvailability from "../../../../globals/availability-enum";
import OfferAcceptanceStatus from "../../../../globals/offer-acceptance-status";

const SellerDashboardSummary = () => {

    const [properties, setProperties] = useState([]);

    const navigate = useNavigate();

    const fetchProperties = () => {
        setProperties(
            [
                {
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
                },
                {
                    id: 2,
                    houseNumber: "RM 430",
                    availability: PropertyAvailability.Pending,
                    acceptance: OfferAcceptanceStatus.Pending,
                    price: 500000,
                    squareFeet: 15000,
                    numberOfBedRooms: 3,
                    numberOfBathRooms: 3,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
                    sellerId: 1,
                    location: {
                        street: "1000 N 4th St",
                        city: "Fairfield",
                        state: "IA",
                        zipCode: "52557",
                    }
                },
                {
                    id: 3,
                    houseNumber: "RM 439",
                    availability: PropertyAvailability.Contingent,
                    acceptance: OfferAcceptanceStatus.Pending,
                    price: 800000,
                    squareFeet: 15000,
                    numberOfBedRooms: 3,
                    numberOfBathRooms: 4,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
                    sellerId: 1,
                    location: {
                        street: "1000 N 4th St",
                        city: "Fairfield",
                        state: "IA",
                        zipCode: "52557",
                    }
                }
            ]);
    }

    useEffect(() => fetchProperties(), []);

    const createProperty = () => {
        navigate("/seller-dashboard/property/create");
    };

    const navigateToOffers = (id) => {
        navigate("/seller-dashboard/property/"+id+"/offers");
    };

    const updateProperty = (id) => {
        navigate("/seller-dashboard/property/update/"+id);
    };

    const deleteProperty= (id) => {
        navigate("/seller-dashboard/property/delete/"+id);
    };

    const tableContent = properties.map(m => {
        return (
            <tr key={m.id}>
                <th scope="row">{m.houseNumber}</th>
                <td>{m.location.street}, {m.location.city}, {m.location.state}, {m.location.zipCode}</td>
                <td>${m.price.toLocaleString()}</td>
                <td>{m.squareFeet}</td>
                <td>{m.numberOfBedRooms}</td>
                <td>{m.numberOfBathRooms}</td>
                <td>{m.description}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" title="Show offers" onClick={() => navigateToOffers(m.id)}>
                        <i className="bi bi-list-task"></i>
                        </button>&nbsp;
                        <button type="button" className="btn btn-secondary" title="Update record" onClick={() => updateProperty(m.id)}>
                        <i className="bi bi-pencil-fill"></i>
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" title="Delete record" onClick={() => deleteProperty(m.id)}>
                        <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <div className="container dashboard">
            <h2>All your properties</h2>

            <button type="submit" onClick={createProperty}><i className="bi bi-plus"></i> Create</button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Property no.</th>
                        <th scope="col">Property Location</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sqft</th>
                        <th scope="col">Beds</th>
                        <th scope="col">Baths</th>
                        <th scope="col">Description</th>
                        {/* <th scope="col">Number of offers</th> */}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    );
}
export default SellerDashboardSummary;