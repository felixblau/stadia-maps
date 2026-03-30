type BlogCardProps = {
  title: string
  excerpt: string
  date: string
  readTime: string
  href?: string
}

export default function BlogCard({ title, excerpt, date, readTime, href = "#" }: BlogCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-4 bg-white border-t-2 border-border-ui rounded-2xl p-6 h-[328px] overflow-hidden hover:shadow-lg transition-shadow"
    >
      <h3 className="font-heading font-medium text-2xl leading-[1.5] text-text">
        {title}
      </h3>
      <p className="flex-1 min-h-0 font-body text-base leading-[1.25] text-text overflow-hidden">
        {excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-heading font-medium text-xs text-text">
          <span className="opacity-75">{date}</span>
          <span className="opacity-75">·</span>
          <span>{readTime}</span>
        </div>
        <div className="text-primary text-xs transition-transform group-hover:translate-x-1">
          →
        </div>
      </div>
    </a>
  )
}
