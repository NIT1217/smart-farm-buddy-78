import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Cloud, BarChart3 } from "lucide-react";
import farmHero from "@/assets/farm-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${farmHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Floating Icons */}
          <div className="absolute -top-10 left-10 animate-float">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
          </div>
          <div className="absolute -top-5 right-20 animate-float delay-1000">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Cloud className="w-6 h-6 text-accent" />
            </div>
          </div>
          <div className="absolute top-10 right-10 animate-float delay-2000">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <BarChart3 className="w-6 h-6 text-secondary" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-grow">
            Smart Farm
            <span className="block text-secondary">Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Revolutionize your farming with AI-powered insights, real-time monitoring, 
            and precision agriculture solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="group px-8 py-4 text-lg font-semibold">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {["AI Crop Analysis", "Weather Monitoring", "Pest Detection", "Yield Prediction"].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;