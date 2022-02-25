import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MemoriesContextProvider from "./data/MemoriesContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <MemoriesContextProvider>
      <App />
    </MemoriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
