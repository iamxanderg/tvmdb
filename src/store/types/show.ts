export interface ShowState {
  shows: Show[];
}

export interface ShowSearch {
  score: number;
  show: Show;
}

export interface Show {
  cast?: Cast[];
  ended: string;
  genres: string[];
  id: number;
  image: ImageType;
  language: string;
  name: string;
  number?: number;
  premiered: string;
  rating: Rating;
  runtime: number;
  seasons?: Episode[];
  summary?: string;
  synopsis: string;
}

export type Episode = {
  airdate?: string;
  airstamp?: string;
  airtime?: string;
  id: number;
  image?: ImageType;
  name: string;
  number: number;
  rating?: Rating;
  runtime?: number;
  season: number;
  summary: string;
  type: string;
  url: string;
};

export type Cast = {
  person: Person;
  character?: Person;
};

export type SeasonOverview = {
  title: string;
  content: Show;
};

type ImageType = {
  medium: string;
  original: string;
};

type Rating = {
  average: number;
};

type Person = {
  id: string;
  name: string;
  image?: ImageType;
  gender?: string;
  birthday?: string;
  deathday?: string;
};
