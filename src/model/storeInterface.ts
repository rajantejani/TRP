export interface StoreInterface {
  storeId: string | number;
  store: string;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  customerGroup1: string;
  customerGroup2: string;
  digital: boolean;
  physical: boolean;
  ageGroup: string;
  active: boolean;
  addressData: {
    streetAddress: string;
    suite: string;
    city: string;
    state: string;
    country: { id: number | string; name: string };
    postalCode: string;
    contacts?: { type: string; description: string; value: string }[];
    url: { name: string; icon: string; link: string }[];
  }[];
  salesData: {
    salesOrganization: { id: string | number; description: string };
    distributionChannel: { id: string | number; description: string };
    divisions: { id: string | number; description: string };
    salesOffice: { id: string | number; description: string };
    salesGroup: { id: string | number; description: string };
    salesDistrict: { id: string | number; description: string };
  }[];
}
