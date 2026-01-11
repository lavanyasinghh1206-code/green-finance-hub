import { Search, CreditCard, MapPin, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Pick",
    description: "Check available surplus food from mess halls near you. Filter by veg, non-veg, or price.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Reserve & Pay",
    description: "Reserve your meal with a small payment. Pay via UPI, wallet, or mess card balance.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: MapPin,
    title: "Pickup On Time",
    description: "Head to the mess during your pickup window. Show your order code and collect your food.",
    color: "bg-eco-good/10 text-eco-good",
  },
  {
    icon: Smile,
    title: "Enjoy & Save",
    description: "Enjoy a delicious meal at half the price. You just helped reduce food waste!",
    color: "bg-eco-excellent/10 text-eco-excellent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Save money on meals while helping your campus go green. It's a win-win!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
