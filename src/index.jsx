import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Cards from './pages/Cards';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Route path="/" component={ Welcome } />
    <Route path="/cards">
      <Cards  />
    </Route>
  </BrowserRouter>
);
