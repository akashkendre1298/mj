import React from "react";
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientInfo from "./component/ClientInfo/ClientInfo";
// import Panel1 from "./component/Panel/Panel1"
import Footer from "./component/Footer/Footer";
import OneDamage from "./component/EditTemp/OneDamage/OneDamage";
import Inspection from "./component/EditTemp/Inspection/Inspection";
import Msgbox from "./component/EditTemp/Msgbox"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientInfo />}></Route>
        {/* <Route path="/" element={<Panel1 />}></Route> */}
        {/* <Route path="/" element={<Footer />}></Route> */}
         {/* <Route path="/" element={<Inspection/>}></Route>  */}
         {/* <Route path="/" element={<Msgbox />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
