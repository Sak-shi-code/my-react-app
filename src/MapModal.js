import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import markerIcon from './pinDrop.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MapModal({ show, onClose, location }) {
  if (!show) return null;

  const { lat, lng, address } = location;
  const position = [lat, lng];

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
        <div style={mapContainerStyle}>
          <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>{address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '600px',
  position: 'relative',
};

const closeButtonStyle = {
  background: 'red',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 1050,
};

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

export default MapModal;
