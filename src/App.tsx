// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/home/Index";
import Navbar from "./componets/global/Navbar";
import Footer from "./componets/global/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <div className="min-w-h-screen ">
        <Index />
      </div>
      <Footer />
    </div>
  );
}

export default App;
