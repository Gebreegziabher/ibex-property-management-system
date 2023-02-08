import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../../../globals/availability-enum";
import OfferAcceptanceStatus from "../../../../globals/offer-acceptance-status";

const UpdateProperty = () => {
    const createPropertyForm = useRef();

    const navigate = useNavigate();

    const param = useParams();

    const [property, setProperty] = useState({});

    const fetchProperty = () => {

        //TODO: to fetch from database

        setProperty({
            id: 1,
            houseNumber: "RM 435",
            availability: PropertyAvailability.Available,
            acceptance: OfferAcceptanceStatus.Pending,
            price: 550000,
            squareFeet: 10000,
            numberOfBedRooms: 3,
            numberOfBathRooms: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
            sellerId: 1,
            location: {
                street: "1000 N 4th St",
                city: "Fairfield",
                state: "IA",
                zipCode: "52557",
            }
        });
    };

    useEffect(() => fetchProperty(), []);

    const updateProperty = (event) => {
        event.preventDefault();

        //TODO: save to database

        navigate("/seller-dashboard");
    };

    let display = null;
    if (property.location != undefined)
        display = <div id="create-account" className="create-account">
            <div className="container">

                <div className="row mt-8">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <h1><Link to="/seller-dashboard" className="anchor"><i className="bx bx-chevron-left"></i>Back</Link></h1>
                        <div className="create-account-form-container">
                            <form className="create-account-form " ref={createPropertyForm} onSubmit={updateProperty}>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="create-account-form-title">
                                            <h2>House Information</h2>
                                        </div>
                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Price($)</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="price" id="price" placeholder="Price" defaultValue={property.price} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Sqft</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="sqft" id="sqft" placeholder="Square feet" defaultValue={property.squareFeet} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Beds</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="beds" id="beds" placeholder="Number of beds" defaultValue={property.numberOfBedRooms} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Baths</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="baths" id="baths" placeholder="Number of baths" defaultValue={property.numberOfBathRooms} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="create-account-form-title">
                                            <h2>Location</h2>
                                        </div>
                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Street</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="street" id="street" placeholder="Street address" defaultValue={property.location.street} required />
                                            </div>
                                        </div>
                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">City</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="city" id="city" placeholder="City" defaultValue={property.location.city} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">State</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="state" id="state" placeholder="State" defaultValue={property.location.state} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Zip code</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="zip-code" id="zip-code" placeholder="Zip code" defaultValue={property.location.zipCode} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-11">
                                        <label className="form-group">Description</label>
                                        <textarea className="form-control" name="message" rows="5" placeholder="description" defaultValue={property.description} required></textarea>
                                    </div>
                                </div>

                                <div className="row gy-2 gx-md-3">
                                    <div className="my-3 col-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-left col-10"><button type="submit">Update</button></div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>;

    return display;
};

export default UpdateProperty;