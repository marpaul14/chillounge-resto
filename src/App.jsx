import { BrowserRouter, NavLink, Routes } from "react-router-dom";
import About from "./components/About";
import Foods from "./components/Foods";
import Hero from "./components/Hero";
import Leisure from "./components/Leisure";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <NavLink to={<Navbar />} />
          <Hero />
          <About />
          <Leisure />
          <Offers />
          <Foods />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
