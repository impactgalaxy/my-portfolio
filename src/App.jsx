import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./shared-components/Footer";
import Navbar from "./shared-components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
