import { useParams } from "react-router"
import { blogPosts } from "@/data/blog-posts"
import BlogCard from "@/components/ui/BlogCard"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="px-16 py-16 max-w-[1280px] mx-auto">
        <h1 className="font-heading font-semibold text-[50px] text-text">Post not found</h1>
        <p className="font-body text-base text-text/70 mt-4">The blog post you're looking for doesn't exist.</p>
      </div>
    )
  }

  // Get 3 related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 sticky top-16 self-start">
          <div className="font-heading font-semibold text-sm text-text mb-4">Table of Contents</div>
          <nav className="flex flex-col gap-2">
            <a href="#introduction" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              Introduction
            </a>
            <a href="#problem" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              The Problem
            </a>
            <a href="#solution" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              Our Solution
            </a>
            <a href="#implementation" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              Implementation
            </a>
            <a href="#results" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              Results
            </a>
            <a href="#conclusion" className="font-body text-sm text-text/70 hover:text-accent transition-colors">
              Conclusion
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <h1 className="font-heading font-semibold text-3xl md:text-[50px] text-text mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 font-body text-base text-text/70 mb-8">
            <span>Stadia Maps Team</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose max-w-none">
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">Introduction</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              In today's rapidly evolving landscape of location-based services, developers face increasing pressure to deliver sophisticated mapping solutions while managing complexity, cost, and compliance. This article explores our journey in addressing these challenges and the lessons we learned along the way.
            </p>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">The Problem</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              Traditional mapping solutions often come with hidden costs, restrictive licenses, and complex implementation requirements. Teams spend countless hours navigating documentation, debugging integration issues, and worrying about unexpected billing spikes.
            </p>

            <div className="bg-text rounded-2xl p-6 my-8">
              <pre className="font-code text-sm text-white overflow-x-auto">
                <code>{`// Example API implementation
fetch('https://api.stadiamaps.com/v1/tiles', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
              </pre>
            </div>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">Our Solution</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              We built our platform with transparency and developer experience at the core. Every API endpoint is thoroughly documented, pricing is predictable, and support is responsive. Our goal is to make mapping APIs that just work.
            </p>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">Implementation</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              The implementation process involved careful consideration of performance, scalability, and developer ergonomics. We tested extensively across different use cases, from small hobby projects to enterprise-scale deployments.
            </p>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">Results</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              The results speak for themselves: faster time to market, reduced operational overhead, and happier development teams. Our customers report significant cost savings and improved application performance.
            </p>

            <h2 className="font-heading font-semibold text-3xl text-text mt-12 mb-4">Conclusion</h2>
            <p className="font-body text-base text-text/70 leading-relaxed mb-6">
              Building developer-friendly mapping APIs requires empathy, attention to detail, and a commitment to transparency. We're proud of what we've built and excited to continue improving based on community feedback.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-bg-neutral">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-text mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                  readTime={relatedPost.readTime}
                  href={`/blog/${relatedPost.slug}`}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
