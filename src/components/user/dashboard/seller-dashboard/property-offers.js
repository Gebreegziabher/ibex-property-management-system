import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../../../globals/availability-enum";
import OfferAcceptanceStatus from "../../../../globals/offer-acceptance-status";
import Roles from "../../../../globals/roles";
import PropertyStatusBadge from "../../../property-status-badge/property-status-badge";

const PropertyOffers = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Owner)
        navigate("/");

    const [property, setProperty] = useState({});
    const [offers, setOffers] = useState([]);

    const param = useParams();

    const fetchOffers = () => {
        axios.get("properties/" + param.id + "/offers").then(response => {
            setOffers(response.data);
        });
        axios.get("properties/" + param.id).then(response => {
            setProperty(response.data);
        });
    }

    useEffect(() => fetchOffers(), []);

    const acceptOffer = (id) => {
        const updatedOffers = offers.map(i => i.id === id ? { ...i, acceptance: OfferAcceptanceStatus.Accepted } : i);
        setOffers([...updatedOffers]);

        const updatedOffer = updatedOffers.filter(f => f.id == id)[0];
        axios.put("offers/" + id, {
            id:id,
            propertyId: id,
            buyerId: updatedOffer.buyer.id,
            buyerProposedPrice: updatedOffer.buyerProposedPrice,
            acceptance: updatedOffer.acceptance
        }).then(response => {
            //TODO: after save to database
        }).catch(error => console.log(error));

        const updatedProperty = { ...property, status: PropertyAvailability.Pending };
        setProperty(updatedProperty);
        axios.put("properties/" + param.id, updatedProperty).then(response => {
            //TODO: after save to database
        }).catch(error => console.log(error));
    };
    const rejectOffer = (id) => {
        const updatedOffers = offers.map(i => i.id === id ? { ...i, acceptance: OfferAcceptanceStatus.Rejected } : i);
        setOffers([...updatedOffers]);

        axios.put("offers/" + id, updatedOffers.filter(f => f.id == id)[0]).then(response => {
            //TODO: after save to database
        }).catch(error => console.log(error));
    };

    const changeToContingent = (id) => {
        const updatedProperty = { ...property, status: PropertyAvailability.Contingent };
        setProperty(updatedProperty);
        axios.put("properties/" + param.id, updatedProperty).then(response => {
            //TODO: after save to database
        }).catch(error => console.log(error));;
    };

    const changeToSold = (id) => {
        const updatedProperty = { ...property, status: PropertyAvailability.Sold };
        setProperty(updatedProperty);
        axios.put("properties/" + param.id, updatedProperty).then(response => {
            //TODO: after save to database
        }).catch(error => console.log(error));
    };

    let tableContent = null;

    if (offers.length != 0)
        tableContent = offers.map(m => {
            return (
                <tr key={m.id}>
                    <td>{m.buyer.firstName} {m.buyer.lastName}</td>
                    <td>{m.buyer.email}</td>
                    <td>{m.buyer.phoneNumber}</td>
                    <td>${m.buyerProposedPrice.toLocaleString()}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            {
                                property.status == PropertyAvailability.Available ?
                                    <>
                                        {
                                            m.acceptance == OfferAcceptanceStatus.Pending ?
                                                <>
                                                    <button type="button" className="btn btn-success" title="Accept offer" onClick={() => acceptOffer(m.id)}>
                                                        Accept
                                                    </button>&nbsp;
                                                    <button type="button" className="btn btn-danger" title="Unlock user" onClick={() => rejectOffer(m.id)}>
                                                        Reject
                                                    </button>
                                                </>
                                                :
                                                m.acceptance == OfferAcceptanceStatus.Accepted ?
                                                    <button type="button" className="btn btn-success btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                    :
                                                    <button type="button" className="btn btn-danger btn-sm" disabled><i className="bi bi-x-circle"></i> {m.acceptance}</button>
                                        }
                                    </>
                                    :
                                    property.status == PropertyAvailability.Pending ?
                                        <>
                                            {
                                                m.acceptance == OfferAcceptanceStatus.Accepted ?
                                                    <>
                                                        <button type="button" className="btn btn-success btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                        &nbsp;
                                                        <button type="button" className="btn btn-warning" title="Change to continget" onClick={() => changeToContingent(m.id)}>
                                                            Change to continget
                                                        </button>&nbsp;
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            m.acceptance == OfferAcceptanceStatus.Rejected ?
                                                                <button type="button" className="btn btn-danger btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                                :
                                                                <>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </>
                                        :
                                        property.status == PropertyAvailability.Contingent ?
                                            <>
                                                {
                                                    m.acceptance == OfferAcceptanceStatus.Accepted ?
                                                        <>
                                                            <button type="button" className="btn btn-success btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                            &nbsp;
                                                            <button type="button" className="btn btn-secondary" title="Change to sold" onClick={() => changeToSold(m.id)}>
                                                                Change to sold
                                                            </button>&nbsp;
                                                        </>
                                                        :
                                                        <>
                                                            {
                                                                m.acceptance == OfferAcceptanceStatus.Rejected ?
                                                                    <button type="button" className="btn btn-danger btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                                    :
                                                                    <></>
                                                            }
                                                        </>
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    m.acceptance == OfferAcceptanceStatus.Accepted ?
                                                        <>
                                                            <button type="button" className="btn btn-secondary btn-sm" disabled><i className="bi bi-check-circle"></i> SOLD </button>
                                                        </>
                                                        :
                                                        <>
                                                            {
                                                                m.acceptance == OfferAcceptanceStatus.Rejected ?
                                                                    <button type="button" className="btn btn-danger btn-sm" disabled><i className="bi bi-check-circle"></i> {m.acceptance}</button>
                                                                    :
                                                                    <></>
                                                            }
                                                        </>
                                                }
                                            </>
                            }
                        </div>
                    </td>
                </tr>
            );
        });

    return (
        <div className="container dashboard">
            <h1><Link to="/seller-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>

            {
                tableContent ?
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Offers for property <strong>{property.propertyNumber}</strong></h4>
                        <hr />
                        <div>
                            Location: <strong>{property.address.street}, {property.address.city}, {property.address.state}, {property.address.zipCode}</strong><br />
                            Price: <strong>${property.price.toLocaleString()}</strong>
                            <PropertyStatusBadge availability={property.status} />
                        </div>
                    </div>
                    :
                    <div className="alert alert-warning" role="alert">
                        No offers are available for this property.
                    </div>
            }
            {
                tableContent &&
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Buyer name</th>
                            <th scope="col">Buyer email</th>
                            <th scope="col">Buyer phone number</th>
                            {/* <th scope="col">Buyer address</th> */}
                            <th scope="col">Requested price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            }
        </div>
    );
}
export default PropertyOffers;