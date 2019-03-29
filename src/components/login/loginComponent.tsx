import * as React from "react";
import { LoginState, LoginResult, LoginRequest } from "@redux/login/types";
//import { doLoginSuccess } from "@redux/login/actions";
import { createAction } from "typesafe-actions";
//import { loginReducer } from "@redux/login/reducer";

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
}

export class LoginComponent extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    email: "",
    password: "",
    error: "",
    isLoading: false
  };
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  login = () => {
    const { doLogin } = this.props;
    doLogin({ email: this.state.email, password: this.state.password });
  };

  render() {
    //  const isExpanded = this.state ? this.state.isExpanded : false;
    return (
      <div className="panel">
        <div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handle}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle}
          />
        </div>
        <div>
          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    );
  }
}
