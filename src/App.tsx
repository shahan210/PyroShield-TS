import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./componets/global/GlobalContext";
import Layout from "./componets/global/Layout";
import About from "./pages/aboutUs/Index";
import Home from "./pages/home/Index";
import Services from "./pages/services/Index";
function App() {
  return (
    <div>
      <GlobalProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </GlobalProvider>
    </div>
  );
}

export default App;
