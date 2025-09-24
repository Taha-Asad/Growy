import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeLayout from "./layout/HomeLayout";
import JobsLayout from "./layout/JobsLayout";
import ServiceLayOut from "./layout/ServiceLayOut";
import SuccessLayout from "./layout/SuccessLayout";
import { Toaster } from "react-hot-toast";
import PricingLayout from "./layout/PricingLayout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomeLayout />} />
        <Route path="/jobs" element={<JobsLayout />} />
        <Route path="/success" element={<SuccessLayout />} />
        <Route path="/services" element={<ServiceLayOut />} />
        <Route path="/pricing" element={<PricingLayout />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
