import Button from "@/components/ui/Button"

export default function ApiPlayground() {
  return (
    <section className="w-full px-16 py-16">
      <div className="mx-auto max-w-[1280px] space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text">
            Don't trust our marketing. Test our APIs.
          </h2>
          <p className="font-body text-base text-text/70">
            Run the request below or try API mapping.
          </p>
        </div>

        {/* Code block */}
        <div className="bg-[#1e1e1e] rounded-2xl p-6 relative">
          <pre className="font-code text-sm text-white overflow-x-auto">
            <code>
              {`$ curl "https://api.stadiamaps.com/geocoding/v1/search\\
  ?text=Starbucks&size=1" \\
  -H "Authorization: Stadia-Auth YOUR_API_KEY"

`}
              <span className="text-gray-400">{`{`}</span>
              {`
  `}
              <span className="text-blue-400">"features"</span>
              {`: [`}
              {`
    `}
              <span className="text-gray-400">{`{`}</span>
              {`
      `}
              <span className="text-blue-400">"type"</span>
              {`: `}
              <span className="text-green-400">"Feature"</span>
              {`,
      `}
              <span className="text-blue-400">"geometry"</span>
              {`: {
        `}
              <span className="text-blue-400">"type"</span>
              {`: `}
              <span className="text-green-400">"Point"</span>
              {`,
        `}
              <span className="text-blue-400">"coordinates"</span>
              {`: [`}
              <span className="text-orange-400">-122.419</span>
              {`, `}
              <span className="text-orange-400">37.774</span>
              {`]
      },
      `}
              <span className="text-blue-400">"properties"</span>
              {`: {
        `}
              <span className="text-blue-400">"name"</span>
              {`: `}
              <span className="text-green-400">"Starbucks"</span>
              {`,
        `}
              <span className="text-blue-400">"locality"</span>
              {`: `}
              <span className="text-green-400">"San Francisco"</span>
              {`,
        `}
              <span className="text-blue-400">"region"</span>
              {`: `}
              <span className="text-green-400">"California"</span>
              {`
      }
    `}
              <span className="text-gray-400">{`}`}</span>
              {`
  ]
`}
              <span className="text-gray-400">{`}`}</span>
            </code>
          </pre>

          <div className="mt-4 flex justify-end">
            <Button variant="primary">Run query</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
