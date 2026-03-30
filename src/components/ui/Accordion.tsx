import { useState } from "react"

type AccordionProps = {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-bg-neutral">
      <button
        className="flex items-center justify-between w-full py-4 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body font-semibold text-base text-text">{question}</span>
        <span className="text-text/50 text-sm transition-transform" style={{ transform: open ? "rotate(180deg)" : "" }}>▾</span>
      </button>
      {open && <div className="pb-4 font-body text-base text-text/70 leading-relaxed">{answer}</div>}
    </div>
  )
}
