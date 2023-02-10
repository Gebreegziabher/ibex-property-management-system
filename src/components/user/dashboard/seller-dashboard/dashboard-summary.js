import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PropertyAvailability from "../../../../globals/availability-enum";
import Roles from "../../../../globals/roles";
import PropertyStatusBadge from "../../../property-status-badge/property-status-badge";

const SellerDashboardSummary = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role != Roles.Owner)
        navigate("/");

    const [properties, setProperties] = useState([]);    

    const fetchProperties = () => {
        axios.get("properties").then(response => {
            const sellerProperties = response.data.filter(f => f.seller.id == auth.userDetails.id);
            setProperties(sellerProperties);
        }).catch();
    }

    useEffect(() => fetchProperties(), []);

    const createProperty = () => {
        navigate("/seller-dashboard/property/create");
    };

    const navigateToOffers = (id) => {
        navigate("/seller-dashboard/property/" + id + "/offers");
    };

    const updateProperty = (id) => {
        navigate("/seller-dashboard/property/update/" + id);
    };

    const deleteProperty = (id) => {
        navigate("/seller-dashboard/property/delete/" + id);
    };

    let tableContent = null;
    if (properties.length != 0)
        tableContent = properties.map(m => {
            return (
                <tr key={m.id}>
                    <th scope="row">{m.propertyNumber}</th>
                    <td>{m.address.street}, {m.address.city}, {m.address.state}, {m.address.zipCode}</td>
                    <td>${m.price.toLocaleString()}</td>
                    <td>{m.lotSize}</td>
                    <td>{m.numberOfBedRooms}</td>
                    <td>{m.numberOfBaths}</td>
                    <td>{m.description}</td>
                    <td><PropertyStatusBadge availability={m.status} /></td>
                    <td>
                        {
                            auth.userDetails.id == m.seller.id &&
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-success" title="Show offers" onClick={() => navigateToOffers(m.id)}>
                                    <i className="bi bi-list-task"></i>
                                </button>&nbsp;
                                {
                                    m.status == PropertyAvailability.Available && 
                                    <>
                                        <button type="button" className="btn btn-secondary" title="Update record" onClick={() => updateProperty(m.id)}>
                                            <i className="bi bi-pencil-fill"></i>
                                        </button>&nbsp;
                                        <button type="button" className="btn btn-danger" title="Delete record" onClick={() => deleteProperty(m.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </>
                                }
                            </div>
                        }
                    </td>
                </tr>
            );
        });

    return (
        <div className="container dashboard">
            <h2>Your properties</h2>

            <button type="submit" onClick={createProperty}><i className="bi bi-plus"></i> Create</button>
            {
                tableContent != null ?
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
                                <th scope="col">Availablility</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
                    :
                    <div className="alert alert-warning alert-info" role="alert">
                        No properties.
                    </div>
            }
        </div>
    );
}
export default SellerDashboardSummary;