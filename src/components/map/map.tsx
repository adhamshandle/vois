import * as React from "react";
import Form from 'react-bootstrap/Form'
import { getGeneric } from "../../store/actions/actionCreators";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import get from 'lodash/get';
import StaticMap from "react-map-gl";
import DeckGL from '@deck.gl/react';
import { PolygonLayer } from "deck.gl";
import 'bootstrap/dist/css/bootstrap.min.css';
const accessToken = 'pk.eyJ1IjoiYWRoYW1raGFsZWQiLCJhIjoiY2t6emwwMWEyMDFrdTNqbWU5NmQzOTRnMSJ9.0tL_joquCO5Ed_lkBRglXw'

const MapboxMap = (props: any) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const genCoordinates = async () => {
            props.getGeneric("polygons")
            await setData(get(props, 'main.polygons',[]));
            console.log(get(props, 'main.polygons', []))
        };
        genCoordinates();
    }, []);
    //set initial map props coordinates
    const INITIAL_VIEW_STATE = {
        longitude: -122.41669,
        latitude: 37.7853,
        zoom: 13,
        height: "100vh",
        pitch: 0,
        bearing: 0
    };
    // set initial polygon layer
    const layers = new PolygonLayer({
        id: 'polygon-layer',
        data,
        pickable: true,
        stroked: true,
        filled: true,
        wireframe: true,
        lineWidthMinPixels: 1,
        getPolygon: (d: any) => d.contour,
        getElevation: (d: any) => d.population / d.area / 10,
        getFillColor: (d: any) => [d.population / d.area / 60, 140, 0],
        getLineColor: [80, 80, 80],
        getLineWidth: 1
    });

    return (
        <div className="container">
            <div className="col-md-3">
                <Form.Select aria-label="Default select example">
                    <option selected disabled={true}>--NONE--</option>
                    {
                        // loop over the data retrieved from json server and choose any polygon name from the dropdown
                        get(props, 'main.polygons', []).length > 0 ? get(props, 'main.polygons', []).map((polygons: any) => {
                            <option value={polygons.geometry.coordinates}>
                                {polygons.geometry.type}
                            </option>
                        }) : <option>empty</option>
                    }
                </Form.Select>
            </div>
            {/* displayed map */}
            <DeckGL viewState={INITIAL_VIEW_STATE}
                height="100%"
                width="100%"
                layers={[layers]}>
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxAccessToken={accessToken}
                />
            </DeckGL>
        </div >);
}
const mapStateToProps = ({ main }: { main: any }) => {
    return { main }
};
export default connect(mapStateToProps, { getGeneric })(MapboxMap);