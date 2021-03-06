/// <reference path="../types/redux.d.ts" />
import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "@redux/rootReducer";
import { doLogin } from "./login/sagasLogin";
import { doInit } from "./home/homeSagas";
import { onError } from "./common/errorSagas";
import { all } from "redux-saga/effects";

export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState!, enhancer);

  if (module.hot) {
    module.hot.accept("@redux/rootReducer", () => {
      const nextRootReducer = require("@redux/rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(function*() {
    yield all([doLogin(), doInit(), onError()]);
  });

  return store;
}
