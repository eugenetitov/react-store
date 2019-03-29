import { Product } from "src/types";
import { BaseState } from "src/types/baseState";

export enum HomeActions {
  DATA_INIT = "DATA_INIT",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED"
}

export interface HomeState extends BaseState {
  products: Product[];
  enviroment: string;
}
