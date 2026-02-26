// Interface for a monument object with various properties
export interface Monument {
    id: number;
    city: string;
    description: string | null;
    img_url?: string | null;
    state: string;
    longitude: number;
    latitude: number;
    map_type?: string;
    map_zoom?: number;
}