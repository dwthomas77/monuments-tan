import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import type { Monument } from "../../types";

interface MonumentsMapProps {
  activeMonument: Monument | null;
}

const MonumentsMap = ({ activeMonument }: MonumentsMapProps) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <div>
      {activeMonument && activeMonument.latitude && activeMonument.longitude && (
      <Map
      style={{width: '100vw', height: '100vh'}}
      center={{lat: activeMonument.latitude, lng: activeMonument.longitude}}
      defaultZoom={12}
      gestureHandling='greedy'
      mapTypeId='satellite'
      >
        <Marker position={{lat: activeMonument.latitude, lng: activeMonument.longitude}} />
      </Map>
      )}
    </div></APIProvider>
  );
};

export default MonumentsMap;
