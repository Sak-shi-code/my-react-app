import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import AdminPanel from './AdminPanel';
import MapModal from './MapModal';
import bearIcon from './bear.png';
import chickenIcon from './chicken.png'
import dogIcon from './dog.png'
import giraffeIcon from './giraffe.png'
import koalaIcon from './koala.png'
import rabbitIcon from './rabbit.png'

function App() {
  const [profiles, setProfiles] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      image: bearIcon, 
      description: 'Web Developer', 
      location: { lat: 12.9129744, lng: 77.6421572, address: '123 Main St' } 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      image: chickenIcon, 
      description: 'Graphic Designer', 
      location: { lat: 12.9129744, lng: 77.6421572, address: '456 Elm St' } 
    },
    { 
      id: 3, 
      name: 'Alice Johnson', 
      image: dogIcon, 
      description: 'Product Manager', 
      location: { lat: 34.052235, lng: -118.243683, address: '789 Sunset Blvd' } 
    },
    { 
      id: 4, 
      name: 'Robert Brown', 
      image: giraffeIcon, 
      description: 'UX/UI Designer', 
      location: { lat: 40.730610, lng: -73.935242, address: '1010 Park Ave' } 
    },
    { 
      id: 5, 
      name: 'Eve White', 
      image: koalaIcon, 
      description: 'Software Engineer', 
      location: { lat: 51.5074, lng: -0.1278, address: '123 Big Ben Rd' } 
    },
    { 
      id: 6, 
      name: 'Charlie Black', 
      image: rabbitIcon, 
      description: 'Data Scientist', 
      location: { lat: 48.8566, lng: 2.3522, address: '567 Eiffel Tower St' } 
    },
    { 
      id: 7, 
      name: 'Sophia Green', 
      image: koalaIcon, 
      description: 'Machine Learning Expert', 
      location: { lat: 37.7749, lng: -122.4194, address: '789 Golden Gate Blvd' } 
    },
    { 
      id: 8, 
      name: 'Liam Blue', 
      image: dogIcon, 
      description: 'DevOps Engineer', 
      location: { lat: 34.0522, lng: -118.2437, address: '333 Hollywood Blvd' } 
    },
    { 
      id: 9, 
      name: 'Mia Red', 
      image: bearIcon, 
      description: 'Marketing Strategist', 
      location: { lat: 37.7749, lng: -122.4194, address: '123 California St' } 
    },
    { 
      id: 10, 
      name: 'Lucas Yellow', 
      image: chickenIcon, 
      description: 'HR Specialist', 
      location: { lat: 51.5074, lng: -0.1278, address: '456 Tower Bridge Rd' } 
    }
  ]);
  
    
    const [isAdmin, setIsAdmin] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSummaryClick = (profileId) => {
        const profile = profiles.find(p => p.id === profileId);
        const location = profile.location;

        setSelectedLocation(location);
        setShowMapModal(true);
    };

    return (
        <div>
            {isAdmin
                ? <AdminPanel profiles={profiles} setProfiles={setProfiles} />
                : profiles.map(profile => (
                    <div key={profile.id}>
                        <ProfileCard {...profile} />
                        <button className="summary-button" onClick={() => handleSummaryClick(profile.id)}>View on Map</button>
                    </div>
                ))
            }
            {}
            {showMapModal && selectedLocation && (
                <MapModal 
                    show={showMapModal} 
                    onClose={() => setShowMapModal(false)} 
                    location={selectedLocation} 
                />
            )}
        </div>
    );
}

export default App;
