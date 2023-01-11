import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const SearchContext = createContext();

function App() {
  const [valueInput, setValueInput] = useState("");

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ valueInput, setValueInput }}>
          <Header valueInput={valueInput} setValueInput={setValueInput} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home valueInput={valueInput} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
