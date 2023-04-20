import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Routes } from "./routes/Routes";

const colors = {
  brand: {
    500: "#28f",
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
