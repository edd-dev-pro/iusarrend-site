import { Routes, Route } from "react-router-dom";
import { Home, PlansPrices, TermsConditions, Contact } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PlansPrices />} />
      <Route path="/" element={<TermsConditions />} />
      <Route path="/" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
