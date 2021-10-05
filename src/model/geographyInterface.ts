export interface GeographyInterface {
  geography: string;
  description: string;
  includedCountries: { id: number; itemName: string }[];
  excludedCountries: { id: number; itemName: string }[];
  salesoffice: {
    salesOffice: { id: string | number; description: string };
    salesGroup: { id: string | number; description: string };
    salesDistrict: { id: string | number; description: string };
  }[];
}
