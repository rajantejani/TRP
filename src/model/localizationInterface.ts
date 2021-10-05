export interface LocalizationInterface {
  attributeName: String;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  attributeValue: String;
}
