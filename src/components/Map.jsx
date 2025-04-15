import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const center = { lat: 45.5236, lng: -122.6750 };

  return (
    <div className="h-[400px] w-full">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        loadingElement={<div className="h-full bg-gray-100 animate-pulse" />}
      >
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={15}
        />
      </LoadScript>
    </div>
  );
};

export default Map;