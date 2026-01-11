import { TrendingUp, TrendingDown, Leaf, ShoppingCart, Car, Utensils, Home, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const carbonData = [
  { name: "Transport", value: 35, color: "hsl(160, 84%, 20%)" },
  { name: "Food", value: 25, color: "hsl(165, 60%, 40%)" },
  { name: "Shopping", value: 20, color: "hsl(140, 50%, 45%)" },
  { name: "Utilities", value: 15, color: "hsl(45, 80%, 50%)" },
  { name: "Other", value: 5, color: "hsl(35, 40%, 70%)" },
];

const monthlyData = [
  { month: "Jan", carbon: 850, spending: 2400 },
  { month: "Feb", carbon: 780, spending: 2100 },
  { month: "Mar", carbon: 720, spending: 1950 },
  { month: "Apr", carbon: 650, spending: 2200 },
  { month: "May", carbon: 580, spending: 1800 },
  { month: "Jun", carbon: 520, spending: 1650 },
];

const transactions = [
  { icon: Car, name: "Uber Ride", category: "Transport", amount: -24.50, carbon: 4.2, score: "moderate" },
  { icon: Utensils, name: "Organic Market", category: "Food", amount: -67.80, carbon: 1.2, score: "excellent" },
  { icon: ShoppingCart, name: "Amazon", category: "Shopping", amount: -129.99, carbon: 8.5, score: "poor" },
  { icon: Zap, name: "Electric Bill", category: "Utilities", amount: -85.00, carbon: 2.8, score: "good" },
  { icon: Home, name: "Rent Payment", category: "Housing", amount: -1500.00, carbon: 0, score: "excellent" },
];

const getScoreColor = (score: string) => {
  switch (score) {
    case "excellent": return "bg-eco-excellent/10 text-eco-excellent";
    case "good": return "bg-eco-good/10 text-eco-good";
    case "moderate": return "bg-eco-moderate/10 text-eco-moderate";
    case "poor": return "bg-eco-poor/10 text-eco-poor";
    default: return "bg-muted text-muted-foreground";
  }
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Eco Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into your spending patterns and their environmental impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Carbon Score Card */}
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Carbon Score</h3>
              <span className="flex items-center gap-1 text-eco-excellent text-sm font-medium">
                <TrendingDown className="w-4 h-4" />
                -12% this month
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={carbonData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {carbonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">72</span>
                  <span className="text-sm text-muted-foreground">Eco Score</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {carbonData.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Monthly Trend */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Carbon Footprint Trend</h3>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">kg CO₂</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(160, 84%, 20%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(160, 84%, 20%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(150, 15%, 45%)', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(150, 15%, 45%)', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(0, 0%, 100%)', 
                      border: '1px solid hsl(140, 20%, 88%)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px -4px hsl(160, 40%, 20%, 0.08)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="carbon" 
                    stroke="hsl(160, 84%, 20%)" 
                    strokeWidth={3}
                    fill="url(#carbonGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Transactions */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Recent Transactions</h3>
            <button className="text-sm text-primary font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tx.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tx.name}</p>
                    <p className="text-sm text-muted-foreground">{tx.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${Math.abs(tx.amount).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{tx.carbon} kg CO₂</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getScoreColor(tx.score)}`}>
                    {tx.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
