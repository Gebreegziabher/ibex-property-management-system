import PropertyAvailability from "../../globals/availability-enum";
import "./property-status-badge.css";

const PropertyStatusBadge = ({ availability }) => {
    let style = {
        backgroundColor: "#0a970a"//green
    };

    if (availability != PropertyAvailability.Available)
        style = availability == PropertyAvailability.Pending ?
            style = { backgroundColor: "#ffaa00" } //warning
            :
            availability == PropertyAvailability.Contingent ?
                style = { backgroundColor: "#ac2a4f" } //amber
                :
                style = { backgroundColor: "#6c757d" }//gray
            ;

    return <div className="property-status">
        <span style={style}>{availability}</span>
    </div>;
}

export default PropertyStatusBadge;