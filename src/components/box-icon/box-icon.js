import { Link } from "react-router-dom";
import "./box-icon.css";

const BoxIcon = ({ id, icon, title, description }) => {
    return (
        <div className="icon-box">
            <div className="icon"><i className={icon}></i></div>
            <h4 className="title"><Link to="" className="anchor">{title}</Link></h4>
            <p className="description">{description}</p>
        </div>
    );
}

export default BoxIcon;