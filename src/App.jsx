import { BrowserRouter, Routes, Route } from "react-router-dom";
// LAYOUTS
import AdminLayout from "./layouts/admin";
import CustomerLayout from "./layouts/customer";
import DefaultLayout from "./layouts/default";

// PAGES
import WelcomePage from "./pages/admin/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path="/admin" element={<WelcomePage />} />
          <Route path="/admin/detail" element={<h1>Admin Detail</h1>} />
        </Route>

        <Route Component={CustomerLayout}>
          <Route index path="/" element={<Home />} />
          <Route path="/about-me" element={<h1>About Me</h1>} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/login" Component={Login} />
          <Route path="/*" element={<h1>404 | Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
