import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Wind,
  TrendingUp,
  AlertTriangle,
  Leaf,
  Eye
} from "lucide-react";
import cropMonitoring from "@/assets/crop-monitoring.jpg";

const FarmDashboard = () => {
  const weatherData = [
    { icon: Thermometer, label: "Temperature", value: "24°C", status: "optimal" },
    { icon: Droplets, label: "Humidity", value: "65%", status: "good" },
    { icon: Wind, label: "Wind Speed", value: "12 km/h", status: "normal" },
    { icon: Sun, label: "UV Index", value: "7", status: "high" },
  ];

  const cropData = [
    { 
      name: "Tomatoes", 
      health: 95, 
      stage: "Flowering", 
      nextAction: "Watering in 2 days",
      alert: false 
    },
    { 
      name: "Corn", 
      health: 88, 
      stage: "Growing", 
      nextAction: "Fertilizer needed",
      alert: true 
    },
    { 
      name: "Wheat", 
      health: 92, 
      stage: "Harvest Ready", 
      nextAction: "Harvest in 5 days",
      alert: false 
    },
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Real-Time Farm Monitoring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant insights into your farm's health and optimize your operations 
            with AI-powered analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weather Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-card border-0 shadow-card-farm">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Sun className="w-5 h-5 mr-2 text-accent" />
                Weather Conditions
              </h3>
              <div className="space-y-4">
                {weatherData.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-secondary" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{item.value}</div>
                      <Badge variant={item.status === "optimal" ? "default" : "secondary"} className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Crop Monitoring */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-card border-0 shadow-card-farm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-secondary" />
                  Crop Health Monitor
                </h3>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {cropData.map((crop) => (
                    <div key={crop.name} className="p-4 bg-background rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-lg">{crop.name}</h4>
                        {crop.alert && (
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Health Score</span>
                          <span className="font-medium">{crop.health}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              crop.health > 90 ? 'bg-secondary' : 
                              crop.health > 70 ? 'bg-accent' : 'bg-destructive'
                            }`}
                            style={{ width: `${crop.health}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Stage: {crop.stage}</span>
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-medium text-primary">{crop.nextAction}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={cropMonitoring} 
                    alt="Crop monitoring dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h5 className="font-semibold mb-1">Field Analytics</h5>
                    <p className="text-sm opacity-90">AI-powered crop analysis</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmDashboard;