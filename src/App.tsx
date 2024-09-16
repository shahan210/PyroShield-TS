// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/home/Index";
import Navbar from "./componets/global/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="min-w-h-screen ">
        <Index />
      </div>
    </div>
  );
}

export default App;
