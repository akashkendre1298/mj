import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientInfo from "./component/ClientInfo/ClientInfo";
import Footer from "./component/Footer/Footer";
import ColorPalet from "./component/ColorPalet/ColorPalet";
import InsertPdf from "./component/InsertPdf/InsertPdf";
import Book from "./component/Address _book/Book";
import Panel1 from "./component/Panel/Panel1/Panel1";
import Panel2 from "./component/Panel/Panel2/Panel2";
import Panel3 from "./component/Panel/Panel3/Panel3";
import PhotoReview from "./component/Photo/PhotoReview";
import BatchAddPhotos from "./component/Photo/BatchAddPhotos/BatchAddPhotos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientInfo />}></Route>
        <Route path="/" element={<Footer />}></Route>
        <Route path="/colorpalet" element={<ColorPalet />}></Route>
        <Route path="/insertpdf" element={<InsertPdf />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/panel1" element={<Panel1 />}></Route>
        <Route path="/panel2" element={<Panel2 />}></Route>
        <Route path="/panel3" element={<Panel3 />}></Route>
        <Route path="/photoreview" element={<PhotoReview />}></Route>
        <Route path="/batchaddphotos" element={<BatchAddPhotos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
