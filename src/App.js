import "./App.css";
// import Sidebar from "./Page/Teacher/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import Schedule from "./Page/Teacher/Schedule";
import SideNav from "./component/Sidebar";
import Home from "./Page/Teacher/Sidebar/Home";

function App() {
  return (
    <BrowserRouter>
      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<SideNav />}>
            <Route path="/shedule" element={<Schedule />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ProSidebarProvider>
      {/* <Sidebar /> */}
    </BrowserRouter>
  );
}

export default App;
