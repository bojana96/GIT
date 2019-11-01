import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {Marker} from 'react-map-gl';
import {MDBIcon} from 'mdbreact';
import { Icon } from 'antd';

const TOKEN="pk.eyJ1IjoiYm9qYW5hcCIsImEiOiJjazJiczk3bXMwM3VrM2lxbWdqMnI4bDY0In0.lCOT5Ub8GqXQCiI7EDgbRw"

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

const Map = () => {

    const [viewport, setViewPort ] = useState({
        width: "100%",
        height: 400,
        latitude: 42.0050,
        longitude: 21.4408,
        zoom: 13,
        
    })

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

    return (
        <div style={{ margin: '0 auto'}}>
            <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}> </h1>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                />
        
       <Marker
    longitude={21.416259}
    latitude={41.999495}
    
  > 
  <MDBIcon fb icon="map-marker"></MDBIcon>
    </Marker>
            </MapGL>
        </div>
    )
}

export default Map;