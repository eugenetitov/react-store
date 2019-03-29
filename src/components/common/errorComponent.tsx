import React, { Dispatch } from "react";
import { Redirect } from "react-router";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
//import { onErrorOccured } from "@redux/common/actions";
import { AnyAction, bindActionCreators } from "redux";
import { onErrorOccured } from "@redux/common/actions";

export interface ErrorProps {
  error?: any;
}

const style = {
  color: "red"
};

export class ErrorComponent extends React.Component {
  render() {
    return <h4 style={style}>{JSON.stringify(this.props)}</h4>;
  }
}

const mapStateToProps = (state: RootState) => ({
  error: state.error
});

// const mapDispatchToProps: any = (dispatch: any) => ({
//   actions: bindActionCreators(onErrorOccured, dispatch)
// });

export default connect(mapStateToProps)(ErrorComponent);
