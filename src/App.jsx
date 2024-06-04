import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import NotFound from "./pages/notfound/NotFound";

import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single/:Id" element={<SinglePage />} />
      <Route path="8" element={<NotFound />} />
      <Route path="admin" element={<Admin />}>
        <Route path="createProduct" element={<CreateProduct />} />
        <Route path="manageProduct" element={<ManageProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
