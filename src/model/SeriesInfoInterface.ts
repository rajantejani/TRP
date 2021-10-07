import { ContributorInterface } from "./ContributorInterface";

export interface episodeInfoInterface {
  sequence: string;
  title: string;
  episodeId: string;
  titleId: string;
  image: string;
  isbn: string;
  description: string;
  sypnosis: string;
  product: string;
}

export interface SeriesInfoInterface {
  title: string;
  sequence: string;
  image: string;
  seriesId: string;
  description: string;
  country: string;
  language: string;
  sku: string;
  synopsis: string;
  product: string;
  opening?: string;
  videoLink?: string;
  closing?: string;
  episodes: episodeInfoInterface[];
  partners: ContributorInterface[];
}
