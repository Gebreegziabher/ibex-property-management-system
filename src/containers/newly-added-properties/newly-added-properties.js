import { useEffect, useState } from "react";
import PropertyCard from "../../components/property-card/property-card";
import "./properties.css";

const NewlyAddedProperties = () => {

    const [properties, setProperties] = useState([]);

    const fetchProperties = () => {
        setProperties(
            [
                { id: 1, availability: "Available", price: 550000, squareFeet: 10000, numberOfBedRooms: 3, numberOfBathRooms: 2, imageUrl: require("../../assets/img/houses/1200x800-1.jpg") },
                { id: 2, availability: "Pending", price: 600000, squareFeet: 15000, numberOfBedRooms: 4, numberOfBathRooms: 2, imageUrl: require("../../assets/img/houses/1200x800-2.jpg") },
                { id: 3, availability: "Available", price: 450000, squareFeet: 8000, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-3.jpg") },
                { id: 4, availability: "Contingent", price: 430000, squareFeet: 1000, numberOfBedRooms: 2, numberOfBathRooms: 1, imageUrl: require("../../assets/img/houses/1200x800-4.jpg") },
            ]
        );
    }

    useEffect(() => fetchProperties(), []);

    const cards = properties.map(m => <PropertyCard key={m.id} id={m.id} availability={m.availability} price={m.price} squareFeet={m.squareFeet} numberOfBedRooms={m.numberOfBedRooms} numberOfBathRooms={m.numberOfBathRooms} imageUrl={m.imageUrl} />);

    return (
        <div id="property-card" className="property-card">
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default NewlyAddedProperties;