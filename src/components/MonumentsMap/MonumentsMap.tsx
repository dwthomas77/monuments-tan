import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import type { Monument } from "../../types";

interface MonumentsMapProps {
  activeMonument: Monument | null;
}

const MonumentsMap = ({ activeMonument }: MonumentsMapProps) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <div>
      {activeMonument && activeMonument.location && (
      <Map
      style={{width: '100vw', height: '100vh'}}
      center={{lat: activeMonument.location.latitude, lng: activeMonument.location.longitude}}
      defaultZoom={12}
      gestureHandling='greedy'
      mapTypeId='satellite'
      >
        <Marker position={{lat: activeMonument.location.latitude, lng: activeMonument.location.longitude}} />
      </Map>
      )}
    </div></APIProvider>
  );
};

export default MonumentsMap;
