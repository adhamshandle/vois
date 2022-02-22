import React from 'react';
// import logo from './logo.svg';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import configureStore from "./store";
import { Provider } from "react-redux";
import Map from './components/map/map';
import { Router } from 'react-router';
export const store = configureStore({}).store;
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Route path="/"  element={Map} />
      </BrowserRouter>
    </Provider >
  );
}

export default App;
