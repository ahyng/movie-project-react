import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from 'react';

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path={"/movie/:id"} element={<Detail />}></Route>
      <Route path={"/"} element={<Home />} />
    </Routes>
  </Router>;
}

export default App;
