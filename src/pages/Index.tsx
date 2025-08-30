import HeroSection from "@/components/HeroSection";
import FarmDashboard from "@/components/FarmDashboard";
import AIAssistant from "@/components/AIAssistant";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <div className="absolute top-4 right-4 z-50">
        <UserProfile />
      </div>
      <HeroSection />
      <FarmDashboard />
      <AIAssistant />
    </main>
  );
};

export default Index;
