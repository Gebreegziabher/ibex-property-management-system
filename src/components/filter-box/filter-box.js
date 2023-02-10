import { useRef } from "react";
import "./filter-box.css";
const FilterBox = ({byLocation, byPrice, bySqft, byBeds, byBaths}) => {

    const locationRef = useRef();
    const priceRef = useRef();
    const sqftRef = useRef();
    const bedsRef = useRef();
    const bathsRef = useRef();

    const filterByLocation = () => {
        //TODO: Filter by selected price
        byLocation(locationRef.current.value);
    };
    const filterByPrice = (price) => {
        //TODO: Filter by selected price
        byPrice(priceRef.current.value);
    };
    const filterBySqft = (lotSize) => {
        //TODO: Filter by selected lotSize
        bySqft(sqftRef.current.value);
    };
    const filterByBedrooms = (numberOfBeds) => {
        //TODO: Filter by selected numberOfBeds
        byBeds(bedsRef.current.value);
    };
    const filterByBathrooms = (numberOfBaths) => {
        //TODO: Filter by selected numberOfBaths
        byBaths(bathsRef.current.value);
    };

    return (
        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="btnGroupAddon"><i className="bi bi-geo-alt-fill"></i></div>
                </div>
                <input ref={locationRef} type="text" className="form-control" placeholder="Street, city, state, zip code" aria-describedby="btnGroupAddon" onChange={filterByLocation}/>
                &nbsp;
                <input ref={priceRef} type="text" className="form-control" placeholder="Price less than" aria-describedby="btnGroupAddon" onChange={filterByPrice}/>
                &nbsp;
                <input ref={sqftRef} type="text" className="form-control" placeholder="Square feet less than" aria-describedby="btnGroupAddon" onChange={filterBySqft}/>
                &nbsp;
                <input ref={bedsRef} type="text" className="form-control" placeholder="# beds" aria-describedby="btnGroupAddon" onChange={filterByBedrooms}/>
                &nbsp;
                <input ref={bathsRef} type="text" className="form-control" placeholder="# baths" aria-describedby="btnGroupAddon" onChange={filterByBathrooms}/>
            </div>
            {/* <div className="btn-group mr-2" role="group" aria-label="First group">
                &nbsp;
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-gray dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Price
                    </button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <span className="dropdown-item" onClick={() => filterByPrice(1)}>&le; $500k</span>
                        <span className="dropdown-item" onClick={() => filterByPrice(2)}>&gt; $500k</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default FilterBox;