import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';


function ProfileCard({ name, image, description, location }) {
    const { lat, lng, address } = location;
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src={image} alt={name} />
            </div>
            <div className="profile-details">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-description">{description}</p>
                <div className="profile-location">
                    <FaMapMarkerAlt size={14} color="#FF5A5F" />
                    <span>{address}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
