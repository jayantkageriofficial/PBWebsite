import HeroSection from "@/components/homepage/HeroSection";
import MissionVisionSection from "@/components/homepage/MissionVisionSection";
import CardStack from "@/components/homepage/CardStack";
import DomainsSection from "@/components/homepage/DomainsSection";
import ActivitiesSection from "@/components/homepage/ActivitiesSection";
import FoundingMembersSection from "@/components/homepage/FoundingMembersSection";
import StayConnectedSection from "@/components/homepage/StayConnectedSection";

export default function Home() {
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
