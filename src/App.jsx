import { Routes, Route } from "react-router-dom";
import MyLink from "./pages/MyLink/index";
import Link from "./pages/Link/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/index";
import Landing from "./pages/Landing/index";
import Template from "./components/Template";
import ProtectedRoute from "./components/ProtectedRoute";
import Appearance from "./pages/Appearance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:id" element={<MyLink />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Template />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/link"
          element={
            <ProtectedRoute>
              <Link />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/appearance"
          element={
            <ProtectedRoute>
              <Appearance />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

