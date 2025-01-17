import { SortOption } from '../const';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
  }

export type City = {
  name: CityName;
  location: Location;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type SortName = `${SortOption}`;
