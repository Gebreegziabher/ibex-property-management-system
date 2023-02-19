import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Roles from "../../../../globals/roles";

const CreateUser = () => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    if(auth.userDetails.role.role != Roles.Admin)
        navigate("/");

    const userFormRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    const [roles, setRoles] = useState([]);

    const fetchRoles = () => {
        axios.get('roles').
            then(response => {
                setRoles(response.data);
            }).catch(error => {
                console.log(error.message);
            });
    };
    useEffect(() => {
        fetchRoles();
    }, []);

    const createUser = (e) => {
        e.preventDefault();
        const user = {
            firstName: userFormRef.current['first-name'].value,
            lastName: userFormRef.current['last-name'].value,
            email: userFormRef.current['email'].value,
            phoneNumber: userFormRef.current['phone-number'].value,
            role: {
                role: userFormRef.current['role'].value,
            }
        };
        axios.post("users", user).then(response => {
            navigate("/admin-dashboard");
        }).catch(error => console.log(error.message));
    };

    const roleSelectOptions = roles.map(m => {
        return <option key={m.id} value={m.role}>{m.role}</option>;
    });

    return (
        <div className="admin-form container">
            <h1><Link to="/admin-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
            <div className="admin-form-container">
                <form ref={userFormRef} onSubmit={createUser}>
                    <div className="row gy-2 gx-md-2">
                        {
                            errorMessage !== "" &&
                            <div class="alert alert-danger alert-info">
                                Role {errorMessage}.
                            </div>
                        }
                        <label className="form-group">First name</label>
                        <div className="col-md-10 form-group">
                            <input type="text" className="form-control text-field" name="first-name" id="first-name" placeholder="First name" required />
                        </div>

                        <label className="form-group">Last name</label>
                        <div className="col-md-10 form-group">
                            <input type="text" className="form-control text-field" name="last-name" id="last-name" placeholder="Last name" required />
                        </div>

                        <label className="form-group">Email</label>
                        <div className="col-md-10 form-group">
                            <input type="email" className="form-control text-field" name="email" id="email" placeholder="Email" required />
                        </div>

                        <label className="form-group">Phone number</label>
                        <div className="col-md-10 form-group">
                            <input type="text" className="form-control text-field" name="phone-number" id="phone-number" placeholder="Phone number" required />
                        </div>

                        <label className="form-group">Role</label>
                        <div className="col-md-10 form-group">
                            <select className="form-control" name="role">
                                {roleSelectOptions}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="text-left col-10"><button type="submit">Create</button></div>
                </form>
            </div>
        </div>
    );
}
export default CreateUser;