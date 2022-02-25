import React from 'react';
// import logo from './logo.svg';
import './App.css';
import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapboxMap from './components/map/map';
export const store = configureStore({}).store;
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MapboxMap/>} />
        </Routes>
      </Router>
    </Provider >
  );
}

export default App;
