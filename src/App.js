import "./App.css";
import Sidebar from "./Page/Teacher/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import Schedule from "./Page/Teacher/Schedule";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
