import axios from "axios";
import { useEffect, useState } from "react";
import FilterBox from "../../components/filter-box/filter-box";
import PropertyCard from "../../components/property-card/property-card";
import PropertyAvailability from "../../globals/availability-enum";

const FilterAllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const fetchProperties = () => {
        axios.get("properties").then(response => {
            const unsoldProperties = response.data.filter(f => f.status != PropertyAvailability.Sold);
            setProperties(unsoldProperties);
            setFilteredProperties(unsoldProperties);
        });
    }

    useEffect(() => fetchProperties(), []);

    const filterByLocation = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.location.street == value || f.location.city == value || f.location.state == value || f.location.zipCode == value));
        else
            setFilteredProperties(properties);
    };
    const filterByPrice = (value) => {
        console.log(value);
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.price <= value));
        else
            setFilteredProperties(properties);
    };
    const filterBySqft = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.lotSize <= value));
        else
            setFilteredProperties(properties);
    };
    const filterByBeds = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.numberOfBedRooms <= value));
        else
            setFilteredProperties(properties);
    };
    const filterByBaths = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.numberOfBaths <= value));
        else
            setFilteredProperties(properties);
    };

    const cards = filteredProperties.map(m => <PropertyCard key={m.id} property={m} />);

    return (
        <div id="property-card" className="property-card">
            <div className="container">
                <FilterBox
                    byLocation={filterByLocation}
                    byPrice={filterByPrice}
                    bySqft={filterBySqft}
                    byBeds={filterByBeds}
                    byBaths={filterByBaths} />
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    );
};
export default FilterAllProperties;