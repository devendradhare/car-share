import React, { useState, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// css
import Styles from "./mapbox.module.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29kZW5kcmFtIiwiYSI6ImNsa2doOTdsdDAwNzQzZ3J6NW1ya3FhOHgifQ.SHXHy-5AQEdp3i5P08iBuw";

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(75.9);
  const [lat, setLat] = useState(22.6);
  const [zoom, setZoom] = useState(9);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(2));
      setLat(map.current.getCenter().lat.toFixed(2));
      setZoom(map.current.getZoom().toFixed(1));
    });
  });

  return (
    <div>
      <div className={Styles.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "700px" }}
      />
    </div>
  );
};

export default MapBox;
