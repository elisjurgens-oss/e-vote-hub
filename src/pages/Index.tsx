import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CallForPapersSection } from "@/components/CallForPapersSection";
import { ProgramCommitteesSection } from "@/components/ProgramCommitteesSection";
import { ProgramSection } from "@/components/ProgramSection";
import { VenueSection } from "@/components/VenueSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CallForPapersSection />
        <ProgramCommitteesSection />
        <ProgramSection />
        <VenueSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
