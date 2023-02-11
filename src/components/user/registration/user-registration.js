import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import Roles from "../../../globals/roles";
import "./user-registration.css";

const UserRegistration = () => {

    const createAccountForm = useRef();

    const navigate = useNavigate();

    const createAccountFormSubmitted = (e) => {
        e.preventDefault();

        const user = {
            email: createAccountForm.current['email'].value,
            firstName: createAccountForm.current['first-name'].value,
            lastName: createAccountForm.current['last-name'].value,
            phoneNumber: createAccountForm.current['phone-number'].value,
            role: {
                role: createAccountForm.current['user-role'].checked == true ? Roles.Owner : Roles.Customer,
            },
            address: {
                street: createAccountForm.current['street'].value,
                city: createAccountForm.current['city'].value,
                state: createAccountForm.current['state'].value,
                zopCode: createAccountForm.current['zip-code'].value
            }
        };
        axios.post("users", user).then(response => {
            navigate("/");
        }).catch(error => console.log(error.message));
    };

    return (
        <div id="create-account" className="create-account">
            <div className="container">
                <div className="row mt-8">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 create-account-form-container" >

                        <form className="create-account-form" ref={createAccountForm} onSubmit={createAccountFormSubmitted}>

                            <div className="row">

                                <div className="col-md-12 col-lg-6">
                                    <div className="create-account-form-title">
                                        <h2>Basic information</h2>
                                    </div>
                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">First name</label>
                                        <div className="col-md-10 form-group">
                                            <input type="text" className="form-control text-field" name="first-name" id="first-name" placeholder="Your first name" required />
                                        </div>
                                    </div>

                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">Last name</label>
                                        <div className="col-md-10 form-group">
                                            <input type="text" className="form-control text-field" name="last-name" id="last-name" placeholder="Your last name" required />
                                        </div>
                                    </div>

                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">Phone number</label>
                                        <div className="col-md-10 form-group">
                                            <input type="tel" className="form-control text-field" name="phone-number" id="phone-number" placeholder="Your phone number" required />
                                        </div>
                                    </div>

                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">Email</label>
                                        <div className="col-md-10 form-group">
                                            <input type="tel" className="form-control text-field" name="email" id="email" placeholder="Your email address" required />
                                        </div>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input check-box" type="checkbox" id="user-role" name="user-role" />
                                        <label className="form-check-label label" htmlFor="user-role">
                                            Register as a seller
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="create-account-form-title">
                                        <h2>Address details</h2>
                                    </div>
                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">Street</label>
                                        <div className="col-md-10 form-group">
                                            <input type="text" className="form-control text-field" name="street" id="street" placeholder="Your street address" required />
                                        </div>
                                    </div>
                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">City</label>
                                        <div className="col-md-10 form-group">
                                            <input type="text" className="form-control text-field" name="city" id="city" placeholder="Your city of residence" required />
                                        </div>
                                    </div>

                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">State</label>
                                        <div className="col-md-10 form-group">
                                            <input type="text" className="form-control text-field" name="state" id="state" placeholder="Your state of residence" required />
                                        </div>
                                    </div>

                                    <div className="row gy-2 gx-md-3">
                                        <label className="form-group">Zip code</label>
                                        <div className="col-md-10 form-group">
                                            <input type="number" className="form-control text-field" name="zip-code" id="zip-code" placeholder="Your zip code" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gy-2 gx-md-3">
                                <div className="my-3 col-3">
                                </div>
                                <div className="text-left col-10"><button type="submit">Submit</button></div>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}
export default UserRegistration;