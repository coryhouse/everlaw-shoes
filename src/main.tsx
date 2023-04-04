import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageMenu from "./ManageMenu";
import { Nav } from "./Nav";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Toaster />
    <Nav />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/manage" element={<ManageMenu />} />
    </Routes>
  </BrowserRouter>
);
