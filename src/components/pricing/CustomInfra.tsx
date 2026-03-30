import Button from "@/components/ui/Button"

export default function CustomInfra() {
  return (
    <section className="bg-bg-neutral/30 px-16 py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-semibold text-[40px] leading-[1.25] mb-4">
              We build custom infrastructure, too
            </h2>
            <p className="font-body text-base text-warm-gray mb-6">
              Need ultra-high volume deployments, custom SLAs, or on-premise infrastructure? We work with
              enterprises and high-growth startups to design location infrastructure that meets your exact
              technical and legal requirements.
            </p>
            <div className="space-y-3">
              <a
                href="#faq"
                className="inline-block font-body text-base text-accent hover:text-accent-bright transition-colors"
              >
                See our Trials & Billing FAQ →
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-body text-base text-warm-gray mb-6">
              Contact us to define a program that meets your exact technical and legal demands. Whether you need
              dedicated infrastructure, custom data retention policies, or specialized compliance requirements,
              we'll work with you to build the perfect solution.
            </p>
            <div className="space-y-4">
              <Button variant="primary" className="w-full lg:w-auto">
                Learn more, let's start the engagement
              </Button>
              <div>
                <a
                  href="#support"
                  className="inline-block font-body text-base text-accent hover:text-accent-bright transition-colors"
                >
                  Learn more about our support experience →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
