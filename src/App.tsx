import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"
import Product from "@/pages/Product"
import BlogList from "@/pages/BlogList"
import BlogPost from "@/pages/BlogPost"
import FAQs from "@/pages/FAQs"
import Logistics from "@/pages/Logistics"
import SwitchFromMapbox from "@/pages/SwitchFromMapbox"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="products/:slug" element={<Product />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="switch-from-mapbox" element={<SwitchFromMapbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
