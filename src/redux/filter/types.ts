export enum SortPropertyEnum {
  RATING = "rating",
  TITLE = "title",
  PRICE = "price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  categoryId: number;
  pageCount: number;
  sort: Sort;
  filter: string;
  inputValue: string;
}
