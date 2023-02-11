import axios from "axios";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import OfferAcceptanceStatus from "../../globals/offer-acceptance-status";
import Roles from "../../globals/roles";

const PropertyProposedPrice = ({property}) => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role != Roles.Admin)
        navigate("/");

    const formRef = useRef();

    const param = useParams();

    const createProposedPrice = (e) => {
        e.preventDefault();
        const offer = {
            propertyId: param.id,
            buyerId: auth.userDetails.id,
            buyerProposedPrice: formRef.current.value,
            acceptance: OfferAcceptanceStatus.Pending
        };

        axios.post("offers", offer).then(response => {
            navigate("/property/" + param.id + "/purchase-landing");
        }).catch(error => console.log(error.message));
    };

    const backLink = "/property-details/" + param.id;

    return (
        <div className="admin-form container">
            <h1><Link to={backLink} className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="admin-form-container">
                <form onSubmit={createProposedPrice}>
                    <div className="row gy-2 gx-md-2">
                        <label className="form-group">What price would you propose?</label>
                        <div className="col-md-10 form-group">
                            <input ref={formRef} type="number" className="form-control text-field" name="price" id="price" placeholder="Proposed price" required />
                        </div>
                    </div>
                    <br />
                    <div className="text-left col-10"><button type="submit">Send Request</button></div>
                </form>
            </div>
        </div>
    );
}

export default PropertyProposedPrice;