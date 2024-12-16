import React from "react";
import Counter from "./pages/Counter";
import Crud from "./pages/Crud";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/counter" element={<Counter />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
