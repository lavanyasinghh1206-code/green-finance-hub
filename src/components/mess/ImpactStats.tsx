import { Leaf, Users, IndianRupee, Utensils, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Utensils,
    value: "12,450",
    label: "Meals Rescued",
    sublabel: "This semester",
    trend: "+23%",
    color: "text-primary",
  },
  {
    icon: Leaf,
    value: "2.5 tons",
    label: "Food Waste Prevented",
    sublabel: "CO₂ equivalent: 8.2 tons",
    trend: "+18%",
    color: "text-eco-excellent",
  },
  {
    icon: IndianRupee,
    value: "₹4.2L",
    label: "Student Savings",
    sublabel: "Avg ₹150/student/month",
    trend: "+31%",
    color: "text-accent",
  },
  {
    icon: Users,
    value: "2,847",
    label: "Active Students",
    sublabel: "Across 8 hostels",
    trend: "+45%",
    color: "text-primary",
  },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-eco-excellent/10 text-eco-excellent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            <span>Making Real Impact</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Our Campus Footprint</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Together, we're transforming how our campus handles food surplus
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="gradient-card border-border hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} bg-current/10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center gap-1 text-eco-excellent text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental Impact Visual */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Environmental Savings</h3>
              <p className="text-muted-foreground mb-6">
                Every meal rescued means less food rotting in landfills, fewer greenhouse gas emissions, 
                and more resources saved. Here's what we've achieved together this year:
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">Water Saved</span>
                    <span className="text-primary font-bold">125,000 Liters</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[75%] gradient-nature rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">CO₂ Prevented</span>
                    <span className="text-primary font-bold">8.2 Tons</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[60%] gradient-nature rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">Land Usage Saved</span>
                    <span className="text-primary font-bold">2.4 Hectares</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[45%] gradient-nature rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-eco-excellent/10 animate-pulse-soft" />
                <div className="absolute inset-4 rounded-full bg-eco-excellent/20" />
                <div className="absolute inset-8 rounded-full bg-eco-excellent/30" />
                <div className="absolute inset-12 rounded-full gradient-nature flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <Leaf className="w-10 h-10 mx-auto mb-2" />
                    <div className="text-2xl font-bold">A+</div>
                    <div className="text-xs">Eco Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
