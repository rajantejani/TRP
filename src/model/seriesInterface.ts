export interface SeriesInterface {
  seriesId: string;
  seriesTitle: string;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  seriesDescription: string;
  seriesPageImage: string;
  titleGraphicsImage: string;
  charcters: { characterName: string; characterRole: string; characterId: string }[];
}
