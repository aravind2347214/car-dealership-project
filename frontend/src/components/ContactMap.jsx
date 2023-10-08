import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactMap = () => {
  const pins = [
    { lat: 37.7749, lon: -122.4194 },
    // Add more pin coordinates as needed
  ];

  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={10}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {pins.map((pin, index) => (
        <Marker key={index} position={[pin.lat, pin.lon]}>
          <Popup>Pin {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ContactMap;
