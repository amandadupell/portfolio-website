import React from "react";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, MadeToPlayPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about/*" />
        <Route path="/made-to-play/*" element={<MadeToPlayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
