import { Utensils, Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MessFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">ReServe</h3>
                <p className="text-xs text-primary-foreground/70">Hostel Food Rescue</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Connecting people with surplus mess food. Save money, reduce waste, eat well.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Browse Food</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">My Orders</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">List Your Mess</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@ReServe.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>JIIT, Sector-62, Noida</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Updates</h4>
            <p className="text-sm text-primary-foreground/70 mb-3">
              Know when your favorite mess has surplus food!
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 ReServe. A student-led sustainability initiative.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MessFooter;
