import { Link } from "react-router"
import Button from "@/components/ui/Button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-[72px] pl-16 pr-10">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 font-heading font-semibold text-lg text-primary">
          <span className="text-2xl">⚡</span>
          <span>Stadia Maps</span>
        </Link>
        <div className="flex items-center gap-8 p-3 font-body text-base text-text">
          <button className="flex items-center gap-2 cursor-pointer">
            Products <span className="text-xs">▾</span>
          </button>
          <Link to="/">Home</Link>
          <a href="#" target="_blank" rel="noopener">Documentation</a>
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Try for free</Button>
      </div>
    </nav>
  )
}
