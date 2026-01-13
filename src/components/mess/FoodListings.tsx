import { useState } from "react";
import { Clock, MapPin, Users, Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";




interface FoodItem {
  id: number;
  name: string;
  mess: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
  pickupTime: string;
  distance: string;
  rating: number;
  image: string;
  tags: string[];
  isHot?: boolean;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Paneer Butter Masala + Roti (4)",
    mess: "Block A Mess",
    originalPrice: 80,
    discountedPrice: 35,
    quantity: 12,
    pickupTime: "7:30 PM - 8:30 PM",
    distance: "2 min walk",
    rating: 4.5,
    image: "🍛",
    tags: ["Vegetarian", "North Indian"],
    isHot: true,
  },
  {
    id: 2,
    name: "Dal Fry + Rice + Papad",
    mess: "Central Mess",
    originalPrice: 60,
    discountedPrice: 25,
    quantity: 8,
    pickupTime: "8:00 PM - 9:00 PM",
    distance: "5 min walk",
    rating: 4.2,
    image: "🍚",
    tags: ["Vegetarian", "Protein Rich"],
  },
  {
    id: 3,
    name: "Chicken Biryani (Half)",
    mess: "Block C Mess",
    originalPrice: 120,
    discountedPrice: 50,
    quantity: 5,
    pickupTime: "7:00 PM - 8:00 PM",
    distance: "4 min walk",
    rating: 4.8,
    image: "🍗",
    tags: ["Non-Veg", "Bestseller"],
    isHot: true,
  },
  {
    id: 4,
    name: "Chole Bhature",
    mess: "Girls Hostel Mess",
    originalPrice: 70,
    discountedPrice: 30,
    quantity: 15,
    pickupTime: "12:30 PM - 1:30 PM",
    distance: "3 min walk",
    rating: 4.3,
    image: "🫓",
    tags: ["Vegetarian", "Filling"],
  },
  {
    id: 5,
    name: "Veg Thali Complete",
    mess: "Block B Mess",
    originalPrice: 100,
    discountedPrice: 40,
    quantity: 6,
    pickupTime: "1:00 PM - 2:00 PM",
    distance: "6 min walk",
    rating: 4.4,
    image: "🥗",
    tags: ["Vegetarian", "Complete Meal"],
  },
  {
    id: 6,
    name: "Egg Curry + Chapati (3)",
    mess: "PG Block Mess",
    originalPrice: 75,
    discountedPrice: 32,
    quantity: 10,
    pickupTime: "8:30 PM - 9:30 PM",
    distance: "7 min walk",
    rating: 4.1,
    image: "🥚",
    tags: ["Egg", "High Protein"],
  },
];


  
 const FoodListings = () => {
  const [reservedItems, setReservedItems] = useState<number[]>([]);

  const handleReserve = (id: number) => {
    setReservedItems((prev) => [...prev, id]);
  };

  

  return (
    <section id="available" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Available Right Now</h2>
            <p className="text-muted-foreground">Fresh surplus from today's mess. Grab before it's gone!</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">All</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary transition-colors">Vegetarian</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary transition-colors">Non-Veg</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary transition-colors">Under ₹30</Badge>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group gradient-card border-border hover:shadow-card transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-2">{item.image}</div>
                  <div className="flex flex-col items-end gap-1">
                    {item.isHot && (
                      <Badge className="bg-destructive text-destructive-foreground gap-1">
                        <Flame className="w-3 h-3" />
                        Hot
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">
                      {Math.round((1 - item.discountedPrice / item.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{item.mess}</p>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{item.pickupTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{item.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{item.quantity} left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-foreground font-medium">{item.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-3 border-t border-border">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">₹{item.discountedPrice}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                  </div>
                  <Button
  size="sm"
  className="gradient-nature text-primary-foreground"
  onClick={() => handleReserve(item.id)}
  disabled={reservedItems.includes(item.id)}
>
  {reservedItems.includes(item.id) ? "Reserved" : "Reserve"}
</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Available Food
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodListings;
