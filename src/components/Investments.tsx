import { TrendingUp, Leaf, Wind, Sun, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const investments = [
  {
    icon: Sun,
    name: "SolarTech Growth Fund",
    category: "Renewable Energy",
    returns: "+18.5%",
    risk: "Medium",
    minInvest: "$100",
    esgScore: 92,
  },
  {
    icon: Wind,
    name: "Clean Wind ETF",
    category: "Wind Energy",
    returns: "+12.3%",
    risk: "Low",
    minInvest: "$50",
    esgScore: 95,
  },
  {
    icon: Droplets,
    name: "Water Conservation",
    category: "Water Tech",
    returns: "+15.8%",
    risk: "Medium",
    minInvest: "$250",
    esgScore: 88,
  },
  {
    icon: Leaf,
    name: "Carbon Neutral Index",
    category: "ESG Blend",
    returns: "+21.2%",
    risk: "High",
    minInvest: "$500",
    esgScore: 90,
  },
];

const Investments = () => {
  return (
    <section id="invest" className="py-20 gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Green Investments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Invest in a <span className="text-gradient">Sustainable Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grow your wealth while supporting companies and funds committed to environmental responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {investments.map((investment, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:gradient-nature transition-all">
                    <investment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{investment.name}</h3>
                    <p className="text-sm text-muted-foreground">{investment.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-eco-excellent/10">
                  <Leaf className="w-4 h-4 text-eco-excellent" />
                  <span className="text-sm font-medium text-eco-excellent">{investment.esgScore}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-eco-excellent" />
                    <span className="font-semibold text-eco-excellent">{investment.returns}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Annual Return</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary/50">
                  <span className="font-semibold text-foreground block mb-1">{investment.risk}</span>
                  <p className="text-xs text-muted-foreground">Risk Level</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary/50">
                  <span className="font-semibold text-foreground block mb-1">{investment.minInvest}</span>
                  <p className="text-xs text-muted-foreground">Min. Invest</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full group-hover:variant-default">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Investments
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investments;
