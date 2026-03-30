import { useState } from "react"
import { blogPosts } from "@/data/blog-posts"
import BlogCard from "@/components/ui/BlogCard"
import TextInput from "@/components/ui/TextInput"

export default function BlogList() {
  const [search, setSearch] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
      <h1 className="font-heading font-semibold text-3xl md:text-[50px] text-text mb-2">Blog</h1>
      <p className="font-body text-base text-text/70 mb-8">{filteredPosts.length} posts</p>

      <TextInput
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-12 max-w-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            href={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </div>
  )
}
