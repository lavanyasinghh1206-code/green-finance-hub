import { Utensils, Bell, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MessHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-nature flex items-center justify-center">
              <Utensils className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MessSaver</h1>
              <p className="text-xs text-muted-foreground">Hostel Food Rescue</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#available" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Available Now
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#impact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Our Impact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-accent">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
                2
              </Badge>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MessHeader;
