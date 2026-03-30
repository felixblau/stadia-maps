import { useState } from "react"
import { Link } from "react-router"
import Button from "@/components/ui/Button"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="flex items-center justify-between h-[72px] pl-6 md:pl-16 pr-6 md:pr-10">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-heading font-semibold text-lg text-primary">
            <span className="text-2xl">⚡</span>
            <span>Stadia Maps</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 p-3 font-body text-base text-text">
            <button className="flex items-center gap-2 cursor-pointer">
              Products <span className="text-xs">▾</span>
            </button>
            <Link to="/">Home</Link>
            <a href="#" target="_blank" rel="noopener">Documentation</a>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="secondary">Login</Button>
          <Button variant="primary">Try for free</Button>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-text transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-text transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-text transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-t border-border-ui shadow-lg z-50">
          <div className="flex flex-col p-6 space-y-4">
            <button className="flex items-center gap-2 cursor-pointer font-body text-base text-text">
              Products <span className="text-xs">▾</span>
            </button>
            <Link to="/" className="font-body text-base text-text" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="#" target="_blank" rel="noopener" className="font-body text-base text-text">Documentation</a>
            <Link to="/pricing" className="font-body text-base text-text" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border-ui">
              <Button variant="secondary">Login</Button>
              <Button variant="primary">Try for free</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
