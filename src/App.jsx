import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import FormPage from "./pages/FormPage";
import HotlinePage from "./pages/HotlinePage";
import Ebook from "./pages/Ebook";
import AddEbook from "./pages/AddEbook";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./components/DefaultLayout";


function App() {
  return (
    <Router>
      <div className="bg-gray-50 font-sans">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />

            <Route path="*" element={<DefaultLayout />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
