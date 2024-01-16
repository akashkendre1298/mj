import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientInfo from "./component/ClientInfo/ClientInfo";
// import Panel1 from "./component/Panel/Panel1"
import Footer from "./component/Footer/Footer";
import ColorPalet from './component/ColorPalet/ColorPalet';
import InsertPdf from './component/InsertPdf/InsertPdf';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientInfo />}></Route>
        {/* <Route path="/" element={<Panel1 />}></Route> */}
        <Route path="/" element={<Footer />}></Route>
        <Route path="/colorpalet" element={<ColorPalet />}></Route>
        <Route path="/insertpdf" element={<InsertPdf />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
