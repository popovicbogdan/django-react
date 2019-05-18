import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />
      </Fragment>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
