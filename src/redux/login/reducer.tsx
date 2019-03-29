import { RootState } from "@redux/rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
  email: "",
  password: "",
  isLoading: false,
  error: ""
};

export function loginReducer(state: LoginState = initialState, action: any) {
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
        loading: true
      };
    }
    case `@@login/LOGIN_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
        error: "error"
      };
    }

    case `@@login/LOGIN_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        token: data,
        loading: false
      };
    }

    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;
