import { ContributorInterface } from "./ContributorInterface";

export interface SeriesInfoInterface {
  Sequence: string;
  image: string;
  seriesId: string;
  description: string;
  country: string;
  language: string;
  SKU: string;
  synopsis: string;
  product: string;
  episodes: any[];
  partners: ContributorInterface[];
}
