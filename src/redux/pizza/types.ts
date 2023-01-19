export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  price: number;
  sizes: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: Pizza[];
  pizza: Pizza;
  status: Status;
}
