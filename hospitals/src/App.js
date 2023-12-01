import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./hospitals/pages/home";
import Hospitals from "./hospitals/pages/hospital";
import ListofService from "./hospitals/pages/service";
import Professional from "./hospitals/pages/professional";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/services" element={<ListofService />} />
        <Route path="/professionals" element={<Professional />} />
      </Routes>
    </div>
  );
}

export default App;
