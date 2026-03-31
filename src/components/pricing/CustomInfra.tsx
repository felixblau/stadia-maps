import Button from "@/components/ui/Button"

export default function CustomInfra() {
  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 max-w-[860px] mx-auto">
        {/* Left column */}
        <div className="flex flex-col gap-8 md:flex-1">
          <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25]">
            We build custom infrastructure, too
          </h2>
          <p className="font-body text-lg leading-[1.25]">
            Mission-critical, high-volume deployments sometimes require bespoke solutions tailored
            to your technical, legal, and privacy requirements.
          </p>
          <p className="font-body font-semibold text-lg leading-[1.25]">
            Stop settling for one-size-fits-all contracts.
          </p>
        </div>

        {/* Right column */}
        <div className="md:flex-1 border-l-0 md:border-l border-primary pl-0 md:pl-6 flex flex-col gap-4 justify-center">
          <p className="font-body text-lg leading-[1.25]">
            Contact us to define a program that meets your exact technical and legal demands:
          </p>
          <ul className="list-disc pl-6 font-body text-base leading-[1.25] opacity-75 space-y-1">
            <li>
              <span className="font-semibold">Defined SLAs</span>: Uptime and support guarantees
              you establish.
            </li>
            <li>
              <span className="font-semibold">Flexible billing</span>: Annual invoicing with custom
              terms to streamline procurement.
            </li>
            <li>
              <span className="font-semibold">Deployment flexibility</span>: On-premises hosting
              and bespoke privacy-preserving solutions for sensitive data.
            </li>
            <li>
              <span className="font-semibold">Expanded licensing</span>: Perpetual rights for
              video, print, and offline media use cases.
            </li>
          </ul>
          <div>
            <Button variant="secondary">Inquire about an enterprise engagement</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
