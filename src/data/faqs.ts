export type FAQ = {
  question: string
  answer: string
}

export type FAQCategory = {
  id: string
  title: string
  questions: FAQ[]
}

export const faqCategories: FAQCategory[] = [
  {
    id: "maps",
    title: "Maps",
    questions: [
      {
        question: "What map styles do you offer?",
        answer: "We offer a variety of map styles including Alidade Smooth, Alidade Smooth Dark, OSM Bright, and Outdoors. All styles are fully customizable and work with popular mapping libraries like MapLibre GL JS, Leaflet, and OpenLayers."
      },
      {
        question: "Can I use Stadia Maps with my preferred mapping library?",
        answer: "Yes! Stadia Maps works with all major open-source mapping libraries including MapLibre GL JS, Leaflet, OpenLayers, Tangram, and more. We provide detailed integration guides for each library."
      },
      {
        question: "Do you support custom map styles?",
        answer: "Absolutely. You can customize our existing styles or upload your own custom styles. Our style editor makes it easy to adjust colors, fonts, and other visual elements to match your brand."
      }
    ]
  },
  {
    id: "free-trials",
    title: "Free Trials",
    questions: [
      {
        question: "How does the free trial work?",
        answer: "Sign up for a free account and get immediate access to all our APIs with generous usage limits. No credit card required to start. You can upgrade to a paid plan at any time."
      },
      {
        question: "What are the free tier limits?",
        answer: "Our free tier includes 50,000 tile requests, 2,500 geocoding requests, and 2,500 routing requests per month. Perfect for development, testing, and small projects."
      },
      {
        question: "Can I upgrade from the free tier?",
        answer: "Yes, you can upgrade to a paid plan at any time. Your usage data and API keys remain the same, and you'll get immediate access to higher limits and premium features."
      }
    ]
  },
  {
    id: "billing",
    title: "Billing",
    questions: [
      {
        question: "How does pricing work?",
        answer: "We offer transparent, predictable pricing with no surprise bills. Choose from our fixed monthly plans or pay-as-you-go options. All plans include overage protection and detailed usage analytics."
      },
      {
        question: "Can I change my plan?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in your next billing cycle."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH transfers for enterprise customers. All payments are processed securely through Stripe."
      }
    ]
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    questions: [
      {
        question: "What are your terms of service?",
        answer: "Our terms of service are straightforward: use our services in good faith, don't abuse our systems, and respect the open data licenses we build upon. You own your data and can export it at any time."
      },
      {
        question: "Can I use Stadia Maps for commercial projects?",
        answer: "Yes! All our plans, including the free tier, support commercial use. No need to worry about license restrictions or attribution requirements beyond what's specified in our terms."
      }
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    questions: [
      {
        question: "Do you offer support?",
        answer: "Yes! All customers get access to our documentation, community forum, and email support. Paid plans include priority support with faster response times, and enterprise customers get dedicated support channels."
      },
      {
        question: "How do I get started?",
        answer: "Sign up for a free account, grab your API key, and follow our quickstart guide. Most developers are up and running in under 10 minutes. Check out our code examples and tutorials for your specific use case."
      }
    ]
  }
]
