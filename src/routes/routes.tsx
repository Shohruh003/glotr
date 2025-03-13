import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FC } from "react";
import NotFound from "../components/views/NotFoundComponent/NotFound";
import Home from "../components/views/MainComponent/Home/Home";
import ProductPage from "../components/views/MainComponent/ProductPage/ProductPage";

const RoutesComponent: FC = () => {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
