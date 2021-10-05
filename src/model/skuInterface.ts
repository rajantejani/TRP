export interface SKUInterface {
  count: number;
  productType: string;
  isbn: string;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  skuDesciption: string;
  companyCode: string;
  salesOrganization: { id: string | number; description: string };
  distributionChannel: { id: string | number; description: string };
  divisions: { id: string | number; description: string };
  productImage: string;
  sku: {
    isbn10: string;
    isbn13: string;
    title: string;
    language: { id: number | string; name: string };
    country: { id: number | string; name: string };
    divisions: { id: string | number; description: string };
    contentFormat: string;
    fileFormat: string;
  }[];
}
