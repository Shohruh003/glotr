import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FC } from "react";
import NotFound from "../components/views/NotFoundComponent/NotFound";
import Home from "../components/views/MainComponent/Home/Home";
import Characteristic from "../components/views/MainComponent/Characteristic/Characteristic";

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
        <Route path="/product/:id" element={<Characteristic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
