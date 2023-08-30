import React, { Component } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";

export class GoogleMaps extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "400px",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 53.54872626900651, lng: -113.52183222147411 }}
      >
        <Marker
          position={{ lat: -113.52183222147411, lng: -113.52183222147411 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDgua5J9vk_ApebO4vMxuS71b4-CAbRMso",
})(GoogleMaps);
