import { ArrowRight, Leaf, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const MessHero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Leaf className="w-4 h-4" />
            <span>Join 2,500+ students saving food daily</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Rescue Surplus Food from
            <span className="block text-accent">Your Hostel Mess</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get delicious meals at 50-70% off. Help reduce food waste. 
            Fresh leftovers from today's mess, ready for pickup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2">
              Browse Available Food
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              List Your Mess
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold">
                <IndianRupee className="w-5 h-5 md:w-6 md:h-6" />
                <span>30-50</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Per Meal</p>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
                <span>15min</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Pickup Time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">500kg</div>
              <p className="text-sm text-primary-foreground/70">Food Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessHero;
