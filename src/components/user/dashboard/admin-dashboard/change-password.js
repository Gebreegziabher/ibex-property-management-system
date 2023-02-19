import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Roles from "../../../../globals/roles";

const ChangePassword = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Admin)
        navigate("/");

    const formRef = useRef();

    const { state } = useLocation();

    const [user, setUser] = useState({});

    const fetchUser = () => {
        axios.get("users/" + state.id).
            then(response => {
                setUser(response.data);
            }).catch(error => console.log(error.message));
    };

    useEffect(() => fetchUser(), []);

    const changePassword = (e) => {
        e.preventDefault();

        const userWithNewPassword = { ...user, password: formRef.current.value };
        axios.put("users/" + state.id, userWithNewPassword).then(response => {
            navigate("/admin-dashboard");
        }).catch(error => console.log(error.message));
    };

    return (
        <div className="admin-form container">
            <h1><Link to="/admin-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="admin-form-container">
                <form onSubmit={changePassword}>
                    <div className="row gy-2 gx-md-2">
                        <label className="form-group">New Password</label>
                        <div className="col-md-10 form-group">
                            <input ref={formRef} type="password" className="form-control text-field" placeholder="New password" required />
                        </div>
                    </div>
                    <br />
                    <div className="text-left col-10"><button type="submit">Change Password</button></div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;