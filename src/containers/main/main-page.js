import "./main.css";
import { Link } from "react-router-dom";
import { SystemName } from "../../globals/common-names";
import NewlyAddedProperties from "../newly-added-properties/newly-added-properties";

const MainPage = () => {
    return (
        <div id="main" className="d-flex align-items-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 text-center">
                        <h1>{SystemName}</h1>
                        <h2>Property Management System</h2>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/filter" className="anchor btn-get-started">Get Started</Link>
                </div>
                <NewlyAddedProperties />
            </div>
        </div>
    );
}

export default MainPage;