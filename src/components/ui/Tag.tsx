export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center bg-primary text-white text-xs font-heading font-medium px-2 py-1 rounded-full leading-none">
      {children}
    </span>
  )
}
