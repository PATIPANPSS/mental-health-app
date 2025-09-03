import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./components/DefaultLayout";
import BookList from "./pages/BookList";
import AddEbook from "./pages/AddEbook";
import EditEbook from "./pages/EditEbook";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <div className="bg-gray-50 font-sans">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/book-list" element={<BookList />} />
            <Route path="/add-ebook" element={<AddEbook />} />
            <Route path='/edit-ebook/:id' element={<EditEbook />} />

            <Route path="*" element={<DefaultLayout />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
