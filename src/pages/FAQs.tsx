import { useState } from "react"
import { faqCategories } from "@/data/faqs"
import Accordion from "@/components/ui/Accordion"

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("maps")

  return (
    <div className="px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
      <h1 className="font-heading font-semibold text-3xl md:text-[50px] text-text mb-8 md:mb-12">Frequently Asked Questions</h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-48 md:sticky md:top-16 md:self-start">
          <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left py-2 px-3 rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-accent font-semibold bg-accent/5"
                    : "text-text/70 hover:text-text hover:bg-bg-neutral/50"
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-3xl">
          {faqCategories.map((category) => (
            <section key={category.id} id={category.id} className="mb-16">
              <h2 className="font-heading font-semibold text-3xl text-text mb-6">{category.title}</h2>
              <div>
                {category.questions.map((faq, index) => (
                  <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
