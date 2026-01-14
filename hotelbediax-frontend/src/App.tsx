import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/admin/Layout";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

