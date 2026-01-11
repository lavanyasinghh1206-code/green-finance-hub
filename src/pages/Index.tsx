import MessHeader from "@/components/mess/MessHeader";
import MessHero from "@/components/mess/MessHero";
import FoodListings from "@/components/mess/FoodListings";
import HowItWorks from "@/components/mess/HowItWorks";
import ImpactStats from "@/components/mess/ImpactStats";
import MessFooter from "@/components/mess/MessFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MessHeader />
      <MessHero />
      <FoodListings />
      <HowItWorks />
      <ImpactStats />
      <MessFooter />
    </div>
  );
};

export default Index;
