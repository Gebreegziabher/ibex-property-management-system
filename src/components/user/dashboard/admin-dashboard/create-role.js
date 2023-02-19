import axios from "axios";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Roles from "../../../../globals/roles";

const CreateRole = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Admin)
        navigate("/");

    const roleRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    const createRole = (e) => {
        e.preventDefault();

        const role = { role: roleRef.current.value };

        axios.post("roles", role).then(response => {

            //TODO: to show error messages 
            //setErrorMessage("already exists");

            navigate("/admin-dashboard");
        }).catch(error => setErrorMessage("Role name already exists."));
    };

    return (
        <div className="admin-form container">
            <h1><Link to="/admin-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="admin-form-container">
                <form onSubmit={createRole}>
                    <div className="row gy-2 gx-md-2">
                        {
                            errorMessage !== "" &&
                            <div className="alert alert-danger alert-info">
                                Role <strong>{roleRef.current.value}</strong> {errorMessage}.
                            </div>
                        }
                        <label className="form-group">Role</label>
                        <div className="col-md-10 form-group">
                            <input ref={roleRef} type="text" className="form-control text-field" name="role" id="role" placeholder="Role name" required />
                        </div>
                    </div>
                    <br />
                    <div className="text-left col-10"><button type="submit">Create</button></div>
                </form>
            </div>
        </div>
    );
}

export default CreateRole;