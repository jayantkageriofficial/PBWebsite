"use client";

import { useEffect } from "react";
import HeroSection from "@/components/homepage/HeroSection";
import MissionVisionSection from "@/components/homepage/MissionVisionSection";
import CardStack from "@/components/homepage/CardStack";
import DomainsSection from "@/components/homepage/DomainsSection";
import ActivitiesSection from "@/components/homepage/ActivitiesSection";
import FoundingMembersSection from "@/components/homepage/FoundingMembersSection";
import StayConnectedSection from "@/components/homepage/StayConnectedSection";
import { useLoadingStore } from "@/lib/store/loading";

export default function Home() {
  const setLoading = useLoadingStore((s) => s.setLoading);

  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  }, [setLoading]);

  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <CardStack />
      <DomainsSection />
      <ActivitiesSection />
      <FoundingMembersSection />
      <StayConnectedSection />
    </>
  );
}
