export type DestinationType = 'Ciudad' | 'Playa' | 'Montaña' | 'Cultural' | 'Aventura';

export interface Destination {
  id: number;
  name: string;
  description: string;
  countryCode: string;
  type: DestinationType;
  lastModification: string;
}
