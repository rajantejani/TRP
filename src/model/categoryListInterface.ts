export interface CategoryListInterface {
  name: string;
  id?: string;
  products?: number;
  productsInsubCats?: number;
  visible?: boolean;
  subCats?: CategoryListInterface[];
  isMain?: boolean;
  notCat?: boolean;
}
