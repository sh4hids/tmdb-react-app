import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Routes from "./routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
