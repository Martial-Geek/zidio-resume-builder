import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FillDetails from "./pages/FillDetails";
import Templates from "./pages/Templates";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fillDetails" element={<FillDetails />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </div>
  );
}

export default App;
