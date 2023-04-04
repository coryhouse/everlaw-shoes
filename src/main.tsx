import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageMenu from "./ManageMenu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/manage" element={<ManageMenu />} />
    </Routes>
  </BrowserRouter>
);
