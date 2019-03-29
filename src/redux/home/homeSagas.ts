import { put, takeEvery, call } from "redux-saga/effects";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import * as Products from "@services/productService";
import { Product } from "src/types";

// worker sagas
export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@home/DATA_INIT`, function*(action: any) {
    try {
      const products: Product[] = yield call(Products.getProducts);

      yield put({
        type: `@@home/DATA_LOADED`,
        payload: {
          data: products
        }
      });
    } catch (error) {
      yield put({
        type: `@@ERROR_OCCURED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
