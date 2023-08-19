import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

function CovidMap() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="map">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "80vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((countryData) => (
            <Marker
              key={countryData.country}
              position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{countryData.country}</h2>
                  <p>Total Cases: {countryData.cases}</p>
                  <p>Active Cases: {countryData.active}</p>
                  <p>Recovered Cases: {countryData.recovered}</p>
                  <p>Deaths: {countryData.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
}

export default CovidMap;
