import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import FormPage from "./pages/FormPage";
import HotlinePage from "./pages/HotlinePage";
import Ebook from "./pages/Ebook";


function App() {
  return (
    <Router>
      <div className="bg-gray-50 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element="/" />
            <Route path="/form" element={<FormPage />} />
            <Route path="/hotline" element={<HotlinePage />} />
            <Route path="/ebook" element={<Ebook />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
