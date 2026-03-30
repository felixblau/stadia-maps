import { useParams } from "react-router"
import { products } from "@/data/products"
import Button from "@/components/ui/Button"

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? products[slug] : undefined

  if (!product) {
    return (
      <div className="px-16 py-16 max-w-[1280px] mx-auto">
        <h1 className="font-heading font-semibold text-[50px] text-text">Product not found</h1>
        <p className="font-body text-base text-text/70 mt-4">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="px-16 py-16 max-w-[1280px] mx-auto">
      {/* Hero Section */}
      <div className="flex gap-12 items-center mb-24">
        <div className="flex-1">
          <div className="font-body text-base text-text/70 mb-4">{product.category}</div>
          <h1 className="font-heading font-semibold text-[50px] text-text mb-6">{product.title}</h1>
          <p className="font-body text-base text-text/70 leading-relaxed mb-8">{product.description}</p>
          <div className="flex gap-4">
            <Button variant="primary">Get started for free</Button>
            <Button variant="secondary">Explore documentation</Button>
          </div>
        </div>
        <div className="w-[480px] h-[360px] bg-gradient-to-br from-accent/20 via-accent-bright/30 to-primary/20 rounded-2xl flex items-center justify-center">
          <div className="font-heading text-text/20 text-2xl">Map Visualization</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-24">
        <h2 className="font-heading font-semibold text-[40px] text-text mb-4">{product.title}</h2>
        <p className="font-body text-base text-text/70 mb-12">Explore the powerful features that make our {product.category.toLowerCase()} stand out.</p>
        <div className="grid grid-cols-2 gap-6">
          {product.features.map((feature) => (
            <div key={feature.title} className="border border-border-ui rounded-2xl p-6">
              <h3 className="font-heading font-medium text-2xl text-text mb-4">{feature.title}</h3>
              <p className="font-body text-base text-text/70 leading-relaxed mb-4">{feature.description}</p>
              <a href="#" className="text-accent font-body text-base hover:text-accent-bright transition-colors">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Teaser */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 text-center">
        <h2 className="font-heading font-semibold text-[40px] text-text mb-4">Avoid surprise bills with fixed and transparent pricing</h2>
        <p className="font-body text-base text-text/70 mb-8 max-w-2xl mx-auto">
          Get predictable costs with our straightforward pricing plans. No hidden fees, no surprises — just reliable service at a price that works for you.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">View pricing</Button>
          <Button variant="secondary">Contact sales</Button>
        </div>
      </div>
    </div>
  )
}
