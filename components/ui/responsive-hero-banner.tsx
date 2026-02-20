"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  logoUrl: string;
  href: string;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl,
  backgroundImageUrl,
  navLinks = [
    { label: "Platform", href: "#platform", isActive: true },
    { label: "Industries", href: "#industries" },
    { label: "Proof", href: "#proof" },
    { label: "Contact", href: "#contact" },
  ],
  badgeLabel = "Platform",
  badgeText = "AI-native operations for the physical world",
  title = "Mind AI Inc.",
  titleLine2 = "The intelligence layer for physical operations.",
  description = "Mind AI unifies voice, vision, location, and activity into real-time operational intelligence for teams working in the field.",
  primaryButtonText = "Get in touch",
  primaryButtonHref = "#contact",
  partnersTitle = "Architected for distributed operations teams",
  partners = [],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#09090b]">
      {backgroundImageUrl && (
        <>
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center animate-hero-bg"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />

      <header className="relative z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Mind AI Inc. home"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Mind AI Inc."
                className="h-[7.5rem] w-auto md:h-[10.5rem]"
              />
            ) : (
              <span className="font-serif text-lg font-normal tracking-tight text-white">
                Mind AI Inc.
              </span>
            )}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={`text-sm font-medium transition-colors ${link.isActive ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white/90" />
            ) : (
              <Menu className="h-5 w-5 text-white/90" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mx-6 mt-4 rounded-2xl border border-white/15 bg-black/70 p-3 backdrop-blur md:hidden">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-slide-in-1 mb-6 inline-flex items-center gap-2.5">
            <span className="rounded border border-white/20 px-2.5 py-0.5 text-xs font-medium tracking-wide text-white/90">
              {badgeLabel}
            </span>
            <span className="text-sm text-white/60">{badgeText}</span>
          </div>

          <h1 className="animate-fade-slide-in-2 font-spectre text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
            <br className="hidden sm:block" />
            {titleLine2}
          </h1>

          <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>

          <div className="animate-fade-slide-in-4 mt-10">
            <a
              href={primaryButtonHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-white/90"
            >
              {primaryButtonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {partnersTitle && (
          <div className="mx-auto mt-24 max-w-2xl">
            <p className="animate-fade-slide-in-1 text-center text-[13px] font-medium tracking-widest text-white/50">
              {partnersTitle}
            </p>
            {partners.length > 0 && (
              <div className="animate-fade-slide-in-2 mt-6 grid grid-cols-2 items-center justify-items-center gap-4 text-white/70 sm:grid-cols-3 md:grid-cols-5">
                {partners.map((partner, index) => (
                  <a
                    key={`${partner.href}-${index}`}
                    href={partner.href}
                    className="inline-flex h-10 w-[120px] items-center justify-center rounded-full bg-cover bg-center opacity-80 transition-opacity hover:opacity-100"
                    style={{ backgroundImage: `url(${partner.logoUrl})` }}
                    aria-label="Industry sample"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
