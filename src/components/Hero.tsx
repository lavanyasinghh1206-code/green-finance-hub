import { ArrowRight, TrendingUp, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-earth" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Fintech for a Sustainable Future</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Track Your Impact,
            <span className="block text-gradient">Grow Green Wealth</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            EcoWallet connects your spending habits to environmental impact. Make smarter financial decisions that benefit both your wallet and the planet.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-eco-excellent" />
                <span className="text-3xl font-bold text-foreground">2.5M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Tons CO₂ Tracked</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active Eco-Savers</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-3xl font-bold text-foreground">$12M</span>
              </div>
              <p className="text-sm text-muted-foreground">Green Investments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
