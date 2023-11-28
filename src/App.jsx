import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <AppLayout />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
