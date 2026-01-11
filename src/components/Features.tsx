import { Leaf, BarChart3, TrendingUp, Shield, Wallet, Globe } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Carbon Tracking",
    description: "Every transaction is analyzed to calculate its environmental footprint in real-time.",
  },
  {
    icon: Leaf,
    title: "Eco Score",
    description: "Get a personal sustainability score based on your spending habits and lifestyle choices.",
  },
  {
    icon: TrendingUp,
    title: "Green Investments",
    description: "Discover and invest in sustainable companies, renewable energy, and ESG funds.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "Set eco-friendly budget goals that align with both financial and environmental targets.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is protected with enterprise-grade encryption and privacy controls.",
  },
  {
    icon: Globe,
    title: "Impact Community",
    description: "Join a community of eco-conscious individuals making a collective difference.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-gradient"> Sustainable Finance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to help you understand, reduce, and offset your environmental impact while growing your wealth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-nature flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
