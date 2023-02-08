import { useRef } from "react";
import { Link } from "react-router-dom";
import { SystemName } from "../../../globals/common-names";
import "./user-registration.css";

const UserRegistration = () => {

    const createAccountForm = useRef();
    const createAccountFormSubmitted = (e) => {
        e.preventDefault();
        const firstName = createAccountForm.current['first-name'].value;
        //const lastName = createAccountForm.current['last-name'].value;
        //const phoneNumber = createAccountForm.current['phone-number'].value;
        //const email = createAccountForm.current['email'].value;
        //const seller = createAccountForm.current['user-role'].value;

        //const street = createAccountForm.current['street'].value;
        //const city = createAccountForm.current['city'].value;
        //const state = createAccountForm.current['state'].value;
        //const zopCode = createAccountForm.current['zipCode'].value;

        console.log(createAccountForm);

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
                                        <input className="form-check-input check-box" type="checkbox" id="gridCheck1" name="user-role" />
                                        <label className="form-check-label label" htmlFor="gridCheck1">
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
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
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