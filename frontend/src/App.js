import "./App.css";
import Students from "./pages/students";
import JoinUs from "./pages/joinUs";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import EditStudent from "./pages/editStudent";
import Navbar from "./components/navbar";
import Thanks from "./pages/thanks";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      {currentPage !== '/' && <Navbar />}
      <div className="App">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/join" element={<JoinUs />} />
          <Route exact path="/students" element={<Students />} />
          <Route path="/students/:id" element={<EditStudent />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
