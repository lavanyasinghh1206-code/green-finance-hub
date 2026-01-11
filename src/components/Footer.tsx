import { Leaf, Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-nature flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">EcoWallet</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Empowering sustainable finance for a greener tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Investments</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest news on sustainable finance.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-lg gradient-nature text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 EcoWallet. Built for Open Innovation Hackathon.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
