import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
