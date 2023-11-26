import { BrowserRouter, NavLink } from "react-router-dom";
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
        <NavLink to={<Navbar />} />
        <Hero />
        <About />
        <Leisure />
        <Offers />
        <Foods />
      </BrowserRouter>
    </>
  );
}

export default App;
