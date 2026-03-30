import { type ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  size?: "desktop" | "mobile"
  asChild?: boolean
}

export default function Button({
  variant = "primary",
  size = "desktop",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-heading font-semibold leading-[1.25] whitespace-nowrap transition-colors cursor-pointer"
  const sizes = size === "desktop" ? "px-4 py-2 text-lg" : "px-3 py-1.5 text-base"
  const variants = {
    primary: "bg-accent-bright text-white hover:bg-accent",
    secondary: "border border-accent text-accent hover:bg-accent/5",
  }
  return (
    <button
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
