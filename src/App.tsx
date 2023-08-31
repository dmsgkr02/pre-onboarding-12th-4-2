import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./route/router";
import GlobalStyle from "./styles/GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
