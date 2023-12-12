import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
