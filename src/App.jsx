import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MoreDetails from "./pages/MoreDetails";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />}>
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="more-details" element={<MoreDetails />} />
            <Route path="order" element={<Order />} />
            <Route path="Reservation" element={<Reservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
