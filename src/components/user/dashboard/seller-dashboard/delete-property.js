import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Roles from "../../../../globals/roles";

const DeleteProperty = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Owner)
        navigate("/");

    const param = useParams();

    const [property, setProperty] = useState({});

    const fetchProperty = () => {
        axios.get("properties/" + param.id).then(response => {
            setProperty(response.data);
        }).catch(error => console.log(error.message));
    };

    useEffect(() => fetchProperty(), []);

    const deleteProperty = () => {
        axios.delete("properties/" + param.id).then(response => {
            navigate("/seller-dashboard");
        }).catch(error => console.log(error.message));
    };

    return (
        <div className="container">
            <h1><Link to="/seller-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="alert alert-danger" role="alert">
                Are you sure you want to remove a property with number <strong>{property.propertyNumber}</strong>?
                <br /><br />
                <button type="button" className="btn btn-danger" title="Delete record" onClick={deleteProperty}>
                    Yes, delete it
                </button>
            </div>
        </div>
    );
};
export default DeleteProperty;