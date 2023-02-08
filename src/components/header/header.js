import { Link, useNavigate } from "react-router-dom";
import { SystemName } from "../../globals/common-names";
import "./header.css";

const Header = () => {

    const loggedInUser = {
        username: "3g.mit02@gmail.com",
        firstName: "Gebreegziabher",
        lastName: "Gebru"
    };

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    const navigateToDashboard = () => {
        //navigate("/admin-dashboard");
        navigate("/seller-dashboard/");
    }

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link className="anchor" to="main">{SystemName}</Link></h1>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-deep-blue" onClick={navigateToLogin}>Login</button>
                    </div>
                    <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {loggedInUser.firstName} {loggedInUser.lastName}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <span className="dropdown-item" onClick={navigateToDashboard}><i className="bi bi-grid-fill icon"></i> Dashboard</span>
                            <span className="dropdown-item"><i className="bi bi-person-lock icon"></i> Account Settings</span>
                            <span className="dropdown-item"><i className="bi bi-power icon"></i> Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;