import PropertyAvailability from "../../globals/availability-enum";
import "./property-status-badge.css";

const PropertyStatusBadge = ({availability}) => {
    let style = {
        backgroundColor: "#0a970a"
    };

    if (availability != PropertyAvailability.Available)
        style = availability == PropertyAvailability.Pending ? style = { backgroundColor: "#ffaa00" } : style = { backgroundColor: "#ac2a4f" };

    return <div className="property-status">
        <span style={style}>{availability}</span>
    </div>;
}

export default PropertyStatusBadge;