import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Roles from "../../../../globals/roles";

const EditRole = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Admin)
        navigate("/");

    const param = useParams();

    const [role, setRole] = useState({});

    const [errorMessage, setErrorMessage] = useState("");

    const roleRef = useRef();

    const fetchRole = () => {
        axios.get("roles/" + param.id).then(response => {
            setRole(response.data);
        }
        ).catch(error => console.log(error.message));
    }

    useEffect(() => fetchRole(), []);

    const editRole = (e) => {
        e.preventDefault();
        const role = { role: roleRef.current.value };

        axios.put("roles/" + param.id, role).then(response => {

            //TODO: to show error messages 
            //setErrorMessage("already exists");

            navigate("/admin-dashboard");
        }).catch(error => console.log(error.message));
    };

    return (
        <div className="admin-form container">
            <h1><Link to="/admin-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="admin-form-container">
                <form className="create-account-form " onSubmit={editRole}>
                    <div className="row gy-2 gx-md-2">
                        {
                            errorMessage !== "" &&
                            <div class="alert alert-danger alert-info">
                                Role <strong>{roleRef.current.value}</strong> {errorMessage}.
                            </div>
                        }
                        <label className="form-group">Role</label>
                        <div className="col-md-10 form-group">
                            <input ref={roleRef} type="text" defaultValue={role.role} className="form-control text-field" name="role" id="role" placeholder="Role name" required />
                        </div>
                    </div>
                    <br />
                    <div className="text-left col-10"><button type="submit">Update</button></div>
                </form>
            </div>
        </div>
    );
}

export default EditRole;