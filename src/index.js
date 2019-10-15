import React from "react";
import ReactDOM from "react-dom";
import About from "./pages/about";

import { Provider } from "react-redux";
import store from "./helpers/configureStore";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <About />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
