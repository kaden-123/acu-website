import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react';

const MapWithDirections = ({ clinicAddress = "6405 218th St SW, Mountlake Terrace, WA 98043, USA" }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Geocode clinic address
  useEffect(() => {
    if (!window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: clinicAddress }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        setCoordinates({
          lat: location.lat(),
          lng: location.lng()
        });
      } else {
        setError('Could not find clinic location');
        setCoordinates({ lat:  47.8016469 , lng:  -122.3199157  }); // Fallback
      }
      setLoading(false);
    });
  }, [clinicAddress]);

  // Get user's current location
  const getUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (err) => {
          setError("Couldn't get your location: " + err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  // Calculate directions when both locations are available
  useEffect(() => {
    if (!window.google || !userLocation || !coordinates) return;

    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: userLocation,
        destination: coordinates,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          setError('Directions request failed: ' + status);
        }
      }
    );
  }, [userLocation, coordinates]);

  return (
    <div className="h-[500px] w-full relative">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        loadingElement={<div className="h-full bg-gray-100 animate-pulse" />}
      >
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={coordinates || { lat: 45.5236, lng: -122.6750 }}
          zoom={coordinates ? 13 : 10}
        >
          {coordinates && (
            <Marker 
              position={coordinates}
            />
          )}
          
          {userLocation && (
            <Marker 
              position={userLocation}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>

      {/* Directions controls */}
      <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md">
        <button 
          onClick={getUserLocation}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
        >
          Get Directions from My Location
        </button>
        
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

export default MapWithDirections;