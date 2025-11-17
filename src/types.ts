// Interface for a location object with required longitude and latitude
export interface Location {
  longitude: number;
  latitude: number;
}

// Interface for a monument object with various properties
export interface MonumentData {
    city: string;
    state: string;
    location?: Location;
}

// Interface for the structure of the monuments data JSON file
export interface MonumentsDataJSON {
  [key: string]: MonumentData;
}

export interface Monument extends MonumentData {
  id: string;
}