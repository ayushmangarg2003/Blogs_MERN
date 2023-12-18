import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import { AuthContextProvider } from "./context/authContext.js";

export const backendLink = "https://blogs-mern-xklh.onrender.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
