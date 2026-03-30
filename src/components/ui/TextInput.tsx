import { type InputHTMLAttributes } from "react"

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export default function TextInput({
  label,
  iconLeft,
  iconRight,
  className = "",
  ...props
}: TextInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="font-heading font-medium text-xs text-warm-gray">
          {label}
        </label>
      )}
      <div className="flex items-center gap-1 h-10 px-3 py-2 bg-white border border-bg-neutral rounded-lg">
        {iconLeft}
        <input
          className="flex-1 min-w-0 text-base font-body text-text placeholder:text-text/50 outline-none bg-transparent"
          {...props}
        />
        {iconRight}
      </div>
    </div>
  )
}
