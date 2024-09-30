// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/home/Index";
import Layout from "./componets/global/Layout";
import { GlobalProvider } from "./componets/global/GlobalContext";
function App() {
  return (
    <div>
      <GlobalProvider>
        <Layout>
          <div className="min-w-h-screen ">
            <Index />
          </div>
        </Layout>
      </GlobalProvider>
    </div>
  );
}

export default App;
