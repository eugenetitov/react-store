import React from "react";
import { HomeState } from "@redux/home/types";
import { ErrorComponent } from "@components/common/errorComponent";
//import { doInit } from "@redux/home/actions";

export interface HomeProps {
  error: string;
  doInit: () => void;
}

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    error: "",
    enviroment: "",
    products: []
  };

  init = () => {
    const { doInit } = this.props;
    doInit();
  };

  render() {
    //  const isExpanded = this.state ? this.state.isExpanded : false;
    return (
      <div className="panel">
        <ErrorComponent />
        <h1>
          Hi welcome to store, enviroment : <b />
          {this.state.enviroment}
        </h1>
        <div>
          {this.state.products.map(i => {
            return (
              <div className="ProductList__Product">
                <span>
                  {i.name} : {i.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    console.log("init");
    this.init();
  }
}
