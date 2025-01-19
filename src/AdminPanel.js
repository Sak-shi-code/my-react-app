import React, { useState } from 'react';

function AdminPanel({ profiles, setProfiles }) {
    const [newProfile, setNewProfile] = useState({
        name: '', image: '', description: '', lat: '', lng: '', address: ''
    });

    const handleAddProfile = () => {
        setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
        setNewProfile({ name: '', image: '', description: '', lat: '', lng: '', address: '' });
    };

    return React.createElement(
        'div',
        null,
        React.createElement('h2', null, 'Admin Panel'),
        React.createElement('input', { placeholder: 'Name', value: newProfile.name, onChange: e => setNewProfile({ ...newProfile, name: e.target.value }) }),
        React.createElement('input', { placeholder: 'Image URL', value: newProfile.image, onChange: e => setNewProfile({ ...newProfile, image: e.target.value }) }),
        React.createElement('input', { placeholder: 'Description', value: newProfile.description, onChange: e => setNewProfile({ ...newProfile, description: e.target.value }) }),
        React.createElement('input', { placeholder: 'Latitude', value: newProfile.lat, onChange: e => setNewProfile({ ...newProfile, lat: e.target.value }) }),
        React.createElement('input', { placeholder: 'Longitude', value: newProfile.lng, onChange: e => setNewProfile({ ...newProfile, lng: e.target.value }) }),
        React.createElement('input', { placeholder: 'Address', value: newProfile.address, onChange: e => setNewProfile({ ...newProfile, address: e.target.value }) }),
        React.createElement('button', { onClick: handleAddProfile }, 'Add Profile')
    );
}

export default AdminPanel;
