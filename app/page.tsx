import { ArrowUpRight, Building2, Radar, Sparkles } from "lucide-react";
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
    icon: Radar,
    title: "Context Layer",
    copy: "Voice, vision, location, and activity become one live operational signal.",
  },
  {
    icon: Sparkles,
    title: "Agentic Guidance",
    copy: "AI agents observe, reason, and guide actions while work is happening.",
  },
  {
    icon: Building2,
    title: "Leadership Control",
    copy: "Distributed teams gain predictive control with real-time visibility.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#09090b] text-[#fafafa]">
      <ResponsiveHeroBanner
        backgroundImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80"
        badgeLabel="Platform"
        badgeText="AI-native operations for the physical world"
        title="Mind AI Inc."
        titleLine2="The intelligence layer for physical operations."
        description="Mind AI unifies voice, vision, location, and activity into real-time operational intelligence. From stores to job sites to warehouses—field activity becomes coordinated action."
        primaryButtonText="Get in touch"
        primaryButtonHref="#contact"
        navLinks={[
          { label: "Platform", href: "#platform", isActive: true },
          { label: "Industries", href: "#industries" },
          { label: "Products", href: "#products" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <section id="platform" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717a]">
            Platform Thesis
          </p>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.15] text-white md:text-5xl">
            A second brain for physical operations.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#a1a1aa]">
            Software that only plans work leaves teams blind in execution. Mind AI closes that gap by
            continuously reasoning over what is happening in the field and coordinating action in
            the moment.
          </p>
        </div>
        <div className="grid gap-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/15"
            >
              <item.icon className="h-5 w-5 text-white/80" />
              <h3 className="mt-5 text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#a1a1aa]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-10 md:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717a]">Industries</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight text-white md:text-4xl">
            One architecture. Multiple verticals. Same operational intelligence core.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 text-[15px] text-[#e4e4e7]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717a]">
            Products
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight text-white md:text-4xl">
            Built and proven in live field operations.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#a1a1aa]">
            Our first vertical—retail execution—validated the architecture across frontline workflows.
            The platform now expands to construction, real estate, supply chain, and warehouse
            operations.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717a]">
              Mind AI Inc.
            </p>
            <a
              href="https://www.mind-inc.io"
              className="mt-3 block font-serif text-2xl font-normal text-white md:text-3xl hover:underline"
            >
              www.mind-inc.io
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-[#a1a1aa]">
              Flatiron District, Manhattan, New York
              <br />
              Technology office in Provo, Utah
            </p>
          </div>
          <a
            href="mailto:contact@mind-inc.io"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            contact@mind-inc.io
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
