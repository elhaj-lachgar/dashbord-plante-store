import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import PlanteProvider from "./context/PlanteContextProvider.tsx";
import CategoryContextProvider from "./context/CategoryContextProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlanteProvider>
        <CategoryContextProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </CategoryContextProvider>
      </PlanteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
