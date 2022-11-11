import { Routes,Route } from "react-router-dom"
import {MainPage} from "./pages/MainPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
    )
}

export default App