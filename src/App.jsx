import { BrowserRouter, Routes, Route } from "react-router-dom";
// LAYOUTS
import AdminLayout from "@/src/layouts/admin";
import CustomerLayout from "@/src/layouts/customer";
import DefaultLayout from "@/src/layouts/default";

// PAGES
import Home from "@/src/pages/Home";
import Login from "@/src/pages/Login";
import WelcomePage from "@/src/pages/admin/Index";

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
