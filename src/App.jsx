import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
