import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="products/:slug" element={<div>Product</div>} />
          <Route path="blog" element={<div>Blog</div>} />
          <Route path="blog/:slug" element={<div>Blog Post</div>} />
          <Route path="faqs" element={<div>FAQs</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
