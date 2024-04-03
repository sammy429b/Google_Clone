import React from "react";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Images from "./pages/Images";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search/>} />
      <Route path="/search" element={<Main/>}/>
      <Route path="/image" element={<Images/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
