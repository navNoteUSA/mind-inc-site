import React from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

const HeroDemo = () => {
  return (
    <ResponsiveHeroBanner
      badgeLabel="Platform"
      badgeText="AI-native operations for the physical world"
      title="Mind AI Inc."
      titleLine2="The intelligence layer for physical operations."
      description="Mind AI unifies voice, vision, location, and activity into real-time operational intelligence."
      primaryButtonText="Get in touch"
      partnersTitle="Architected for distributed operations teams"
    />
  );
};

export default HeroDemo;
