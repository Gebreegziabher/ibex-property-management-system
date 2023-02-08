import { useEffect, useState } from "react";
import FilterBox from "../../components/filter-box/filter-box";
import PropertyCard from "../../components/property-card/property-card";

const FilterAllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const fetchProperties = () => {
        var prop =
            [
                { id: 1, availability: "Available", price: 550000, squareFeet: 10000, numberOfBedRooms: 3, numberOfBathRooms: 2, imageUrl: require("../../assets/img/houses/1200x800-1.jpg") },
                { id: 2, availability: "Pending", price: 600000, squareFeet: 15000, numberOfBedRooms: 4, numberOfBathRooms: 2, imageUrl: require("../../assets/img/houses/1200x800-2.jpg") },
                { id: 3, availability: "Available", price: 450000, squareFeet: 8000, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-3.jpg") },
                { id: 4, availability: "Contingent", price: 430000, squareFeet: 1000, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-4.jpg") },
                { id: 5, availability: "Pending", price: 330000, squareFeet: 800, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-5.jpg") },
                { id: 6, availability: "Pending", price: 330000, squareFeet: 800, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-5.jpg") },
                { id: 7, availability: "Pending", price: 330000, squareFeet: 800, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-5.jpg") },
            ];

        setProperties(prop);
        setFilteredProperties(prop);
    }

    useEffect(() => fetchProperties(), []);

    const filterByLocation = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.location.street == value || f.location.city == value || f.location.state == value || f.location.zipCode == value));
    };
    const filterByPrice = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.price <= value));
        else
            setFilteredProperties(properties);
    };
    const filterBySqft = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.squareFeet <= value));
    };
    const filterByBeds = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.numberOfBedRooms <= value));
    };
    const filterByBaths = (value) => {
        if (value != "")
            setFilteredProperties(s => properties.filter(f => f.numberOfBathRooms <= value));
    };

    const cards = filteredProperties.map(m => <PropertyCard key={m.id} id={m.id} availability={m.availability} price={m.price} squareFeet={m.squareFeet} numberOfBedRooms={m.numberOfBedRooms} numberOfBathRooms={m.numberOfBathRooms} imageUrl={m.imageUrl} />);

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