import { defineCustomElements } from "@ionic/pwa-elements/loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MemoriesContextProvider from "./data/MemoriesContextProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <MemoriesContextProvider>
      <App />
    </MemoriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

defineCustomElements(window);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
