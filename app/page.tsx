import { ArrowUpRight } from "lucide-react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

const industries = [
  "Retail field execution",
  "Construction operations",
  "Door-to-door sales",
  "Real estate walkthroughs",
  "Supply chain workflows",
  "Warehouse coordination",
];

const capabilities = [
  {
    title: "Context Layer",
    copy: "Voice, vision, location, and activity become one live operational signal.",
  },
  {
    title: "Agentic Guidance",
    copy: "AI agents observe, reason, and guide actions while work is happening.",
  },
  {
    title: "Leadership Control",
    copy: "Distributed teams gain predictive control with real-time visibility.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#09090b] text-[#fafafa]">
      <ResponsiveHeroBanner
        logoUrl="/logo-transparent.png"
        backgroundImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80"
        badgeLabel="Platform"
        badgeText="AI-native operations for the physical world"
        title="Mind AI Inc."
        titleLine2="The intelligence layer for physical operations."
        description="Mind AI unifies voice, vision, location, and activity into real-time operational intelligence. From stores to job sites to warehouses, field activity becomes coordinated action."
        primaryButtonText="Get in touch"
        primaryButtonHref="#contact"
        navLinks={[
          { label: "Platform", href: "#platform", isActive: true },
          { label: "Industries", href: "#industries" },
          { label: "Products", href: "https://navnote.net/product", isActive: false },
          { label: "Contact", href: "https://navnote.net/contact", isActive: false },
        ]}
      />

      <section id="platform" className="mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-normal leading-[1.15] text-white md:text-5xl lg:text-6xl">
            A second brain for physical operations.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-[#a1a1aa]">
            Software that only plans work leaves teams blind in execution. Mind AI closes that gap by
            continuously reasoning over what is happening in the field and coordinating action in
            the moment.
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-3xl gap-16 md:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="border-l border-white/10 pl-8">
              <h3 className="text-base font-medium tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#71717a]">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="industries" className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl font-normal leading-[1.15] text-white md:text-5xl lg:text-6xl">
              One architecture. Multiple verticals.
            </h2>
            <p className="mt-8 text-lg leading-[1.7] text-[#a1a1aa]">
              Same operational intelligence core across retail, construction, door-to-door sales,
              real estate, supply chain, and warehouse operations.
            </p>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-[#71717a]">
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl font-normal leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Built and proven in live field operations.
            </h2>
            <p className="mt-8 text-lg leading-[1.7] text-[#a1a1aa]">
              Our first vertical, retail execution, validated the architecture across frontline
              workflows. The platform now expands to construction, real estate, supply chain, and
              warehouse operations.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <a href="/" className="block">
                <img
                  src="/logo-transparent.png"
                  alt="Mind AI Inc."
                  className="h-[7.5rem] w-auto md:h-36"
                />
              </a>
              <a
                href="https://www.mind-inc.io"
                className="mt-6 block font-serif text-2xl font-normal text-white md:text-3xl hover:underline"
              >
                www.mind-inc.io
              </a>
              <p className="mt-4 text-[15px] text-[#71717a]">
                Flatiron District, Manhattan
                <br />
                Technology office in Provo, Utah
              </p>
            </div>
            <a
              href="mailto:contact@mind-inc.io"
              className="inline-flex w-fit items-center gap-2 text-[15px] font-medium text-white hover:text-white/80 transition-colors"
            >
              contact@mind-inc.io
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
