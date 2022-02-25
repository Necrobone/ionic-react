import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MemoriesContextProvider from "./data/MemoriesContextProvider";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

ReactDOM.render(
  <React.StrictMode>
    <MemoriesContextProvider>
      <App />
    </MemoriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

defineCustomElements(window);
