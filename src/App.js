import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Share/Footer/Footer";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
