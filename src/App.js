import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home_Page from "./pages/Home_Page";
import Project_Page from "./pages/Project_Page";
import About_Page from "./pages/About_Page";
import Contact_Page from "./pages/Contact_Page";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home_Page />} />
        <Route path="/projects" element={<Project_Page />} />
        <Route path="/about" element={<About_Page />} />
        <Route path="/contact" element={<Contact_Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
