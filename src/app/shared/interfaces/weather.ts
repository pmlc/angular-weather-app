export interface Weather {
  city: string;
  country: string;
  image: string;
  description: string;
  temperature: number;
  lat?: number;
  lon?: number;
}
