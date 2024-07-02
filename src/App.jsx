import React from "react";
import Axios from "./Pages/Axios";
import Fetch from "./Pages/Fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Axios></Axios>}>
            Axios
          </Route>
          <Route path="/Fetch" element={<Fetch></Fetch>}>
            Fetch
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
