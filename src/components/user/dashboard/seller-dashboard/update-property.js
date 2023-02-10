import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyAvailability from "../../../../globals/availability-enum";

const UpdateProperty = () => {
    const createPropertyForm = useRef();

    const navigate = useNavigate();

    const param = useParams();

    const [property, setProperty] = useState({});

    const fetchProperty = () => {
        axios.get("properties/" + param.id).then(response => {
            setProperty(response.data);
        }).catch(error => console.log(error.message));
    };

    useEffect(() => fetchProperty(), []);

    const updateProperty = (event) => {
        event.preventDefault();
        const updated = {
            id: param.id,
            price: createPropertyForm.current['price'].value,
            lotSize: createPropertyForm.current['sqft'].value,
            propertyNumber: createPropertyForm.current['property-number'].value,
            description: createPropertyForm.current['description'].value,
            numberOfBedRooms: createPropertyForm.current['beds'].value,
            numberOfBaths: createPropertyForm.current['baths'].value,
            status: property.status,
            address: {
                id: property.address.id,
                street: createPropertyForm.current['street'].value,
                city: createPropertyForm.current['city'].value,
                state: createPropertyForm.current['state'].value,
                zipCode: createPropertyForm.current['zip-code'].value
            },
            sellerId: 2
        };

        axios.put("properties/" + param.id, updated).then(response => {
            navigate("/seller-dashboard");
        }).catch(error => console.log(error.message));
    };

    let display = null;
    if (property.address != undefined)
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
                                            <label className="form-group">Property number</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="property-number" id="property-number" placeholder="Property number" defaultValue={property.propertyNumber} required />
                                            </div>
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
                                                <input type="number" className="form-control text-field" name="sqft" id="sqft" placeholder="Square feet" defaultValue={property.lotSize} required />
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
                                                <input type="number" className="form-control text-field" name="baths" id="baths" placeholder="Number of baths" defaultValue={property.numberOfBaths} required />
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
                                                <input type="text" className="form-control text-field" name="street" id="street" placeholder="Street address" defaultValue={property.address.street} required />
                                            </div>
                                        </div>
                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">City</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="city" id="city" placeholder="City" defaultValue={property.address.city} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">State</label>
                                            <div className="col-md-10 form-group">
                                                <input type="text" className="form-control text-field" name="state" id="state" placeholder="State" defaultValue={property.address.state} required />
                                            </div>
                                        </div>

                                        <div className="row gy-2 gx-md-3">
                                            <label className="form-group">Zip code</label>
                                            <div className="col-md-10 form-group">
                                                <input type="number" className="form-control text-field" name="zip-code" id="zip-code" placeholder="Zip code" defaultValue={property.address.zipCode} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-11">
                                        <label className="form-group">Description</label>
                                        <textarea className="form-control" name="description" rows="5" placeholder="description" defaultValue={property.description}></textarea>
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