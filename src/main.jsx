/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import { registerServiceWorker } from "./serviceWorker"; // Import the service worker function

  ReactDOM.render(<App />, document.getElementById("root"));

  registerServiceWorker(); // Call the registerServiceWorker function



