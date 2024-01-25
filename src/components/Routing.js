import { Routes, Route } from "react-router-dom";

// Main pages components
import Homepage from "../components/pages/Homepage/Homepage";
import About from "../components/pages/About/About";
import Menu from "../components/pages/Menu/Menu";
import Reservations from "../components/pages/Reservations/Reservations";
import Orderonline from "../components/pages/Orderonline/Orderonline";
import Login from "../components/pages/Login/Login";
import Confirmation from "../components/pages/Confirmation/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order" element={<Orderonline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
