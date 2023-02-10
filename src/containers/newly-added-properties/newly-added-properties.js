import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../../components/property-card/property-card";
import PropertyAvailability from "../../globals/availability-enum";
import "./properties.css";

const NewlyAddedProperties = () => {

    const [properties, setProperties] = useState([]);

    const fetchProperties = () => {
        axios.get("properties").then(response => {
            const unsoldProperties = response.data.filter(f => f.status != PropertyAvailability.Sold);
            setProperties(unsoldProperties);
        });
    }

    useEffect(() => fetchProperties(), []);

    const cards = properties.map(m => <PropertyCard key={m.id} property={m} />);

    return (
        <div id="property-card" className="property-card">
            <p>Newly added</p>
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default NewlyAddedProperties;