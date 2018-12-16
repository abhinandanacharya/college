import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import jquery from "../node_modules/jquery/dist/jquery.js";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import js from "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
