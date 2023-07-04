import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import Tambah from "./tambah";
import Industri from "./industri";
import Informatika from "./informatika";
import Informasi from "./informasi";
import Otomotif from "./otomotif";
import Jdwlinfrd3 from "./Jdwlinfrd3";
import Matkul from "./matkul";
import Login from "./login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="screens-container">
          <Sidebar />
          <div className="screens-section-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Tables" element={<Tables />} />
              <Route path="/Jdwlinfrd3" element={<Jdwlinfrd3 />} />
              <Route path="/Matkul" element={<Matkul />} />
              <Route path="/Industri" element={<Industri />}></Route>
              <Route path="/Informatika" element={<Informatika />} />
              <Route path="/Informasi" element={<Informasi />} />
              <Route path="/Otomotif" element={<Otomotif />} />
              <Route path="/Tambah" element={<Tambah />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
