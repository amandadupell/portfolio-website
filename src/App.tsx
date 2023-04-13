import React from "react";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
