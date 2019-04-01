import React from "react";
import { HomeState } from "@redux/home/types";
import { Error } from "@components/common/errorComponent";
import { Product } from "src/types";
//import { doInit } from "@redux/home/actions";

export interface HomeProps {
  error: string;
  products: Product[];
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
        <Error />
        <h1>
          Hi welcome to store, enviroment : {process.env.NODE_ENV} <b />
        </h1>
        <div>
          {this.props.products.map((i, ix) => {
            return (
              <div className="ProductList__Product" key={ix}>
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
