import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SystemName } from "../../globals/common-names";
import Roles from "../../globals/roles";
import { authActions } from "../../store/store";
import "./header.css";

const Header = () => {

    const auth = useSelector(state => state.auth);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const navigateToLogin = () => {
        console.log("I am here!");
        navigate("/login");
    };

    const navigateToDashboard = () => {
        if (auth.userDetails != undefined && auth.userDetails.role != undefined) {
            switch (auth.userDetails.role) {
                case Roles.Admin:
                    navigate("/admin-dashboard");
                    break;
                case Roles.Owner:
                    navigate("/seller-dashboard/");
                    break;
                case Roles.Customer:
                    navigate("/buyer-dashboard");
                    break;
            }
        }
        else {
            navigate("/");
        }
    }

    const handleLogout = () => {
        //TODO: logout from database

        dispatch(authActions.logout());

        //TODO: clear access token from cookies
        
        navigate('/');
    };

    console.log(auth.isAuthenticated)

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link className="anchor" to="main">{SystemName}</Link></h1>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    {
                        auth.isAuthenticated == false ?
                            <div className="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" className="btn btn-deep-blue" onClick={navigateToLogin}>Login</button>
                            </div>
                            :
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {auth.userDetails.firstName} {auth.userDetails.lastName}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <span className="dropdown-item" onClick={navigateToDashboard}><i className="bi bi-grid-fill icon"></i> Dashboard</span>
                                    <span className="dropdown-item"><i className="bi bi-person-lock icon"></i> Account Settings</span>
                                    <span className="dropdown-item" onClick={handleLogout}><i className="bi bi-power icon"></i> Logout</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </header >
    );
}

export default Header;