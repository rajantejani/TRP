export interface CharacterInterface {
  characterId: string;
  characterName: string;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  characterLanguage: { id: number | string; name: string };
  characterCountry: { id: number | string; name: string };
  characterAge: number;
  characterGender: string;
  favoriteColor: string;
  favoriteHobby: string;
  getToKnowMe: string;
  series: { seriesId: string; seriesDescription: string; characterWindowImage: string; bookCharacterOImage: string; bookCharacterTImage: string }[];
}
