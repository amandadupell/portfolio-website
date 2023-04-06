import React from "react";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<></>} />
        <Route path="/about/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
