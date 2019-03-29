import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";

export interface RootState {
  error: string;
  login: LoginState;
  home: HomeState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  home: homeReducer
});

export default rootReducer;
