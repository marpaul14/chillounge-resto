import Navbar from "../ui/Navbar";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Leisure from "../ui/Leisure";
import Offers from "../ui/Offers";
import Foods from "../ui/Foods";
import MoreDetails from "./MoreDetails";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leisure />
        <Offers />
        <Foods />
        <MoreDetails />
      </main>
    </>
  );
}

export default AppLayout;
