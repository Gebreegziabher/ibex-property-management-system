
import "./address-card.css";
const AddressCard = ({Address, City, State, ZipCode, Email, PhoneNumber}) => {
    return (
        <div className="info">
            <br />
            <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{Address}, {City}, {State} {ZipCode}</p>
            </div>

            <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{Email}</p>
            </div>

            <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{PhoneNumber}</p>
            </div>
        </div>
    );
}

export default AddressCard;