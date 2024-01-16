import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientInfo from "./component/ClientInfo/ClientInfo";
// import Panel1 from "./component/Panel/Panel1"
import Footer from "./component/Footer/Footer";
import InsertPdf from "./component/InsertPdf/InsertPdf";
import ColorPalette from "./component/ColorPalet/ColorPalet";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientInfo />}></Route>
        <Route path="/insertpdf" element={<InsertPdf />}></Route>
        {/* <Route path="/" element={<Panel1 />}></Route> */}
        <Route path="/" element={<Footer />}></Route>
        <Route path="/colorpalet" element={<ColorPalette />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
