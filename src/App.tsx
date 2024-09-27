// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/home/Index";
import Layout from "./componets/global/Layout";
function App() {
  return (
    <div>
      <Layout>
        <div className="min-w-h-screen ">
          <Index />
        </div>
      </Layout>
    </div>
  );
}

export default App;
