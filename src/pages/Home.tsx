import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, MapPin, Clock, Truck } from "lucide-react";
import { restaurantInfo } from "@/data/menuData";
import heroImage from "/images/pictures/herosection.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              {restaurantInfo.tagline}
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-gradient-gold">Louisiana</span>
              <br />
              <span className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Fish, Chicken, Shrimp & Grill</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Serving the best crispy fried chicken and golden fish in St. Louis. 
              Fresh ingredients, family recipes, unforgettable taste.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/menu">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl shadow-glow">
                  View Menu
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:314-680-0000">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Open 7 Days"
              description="11am - 10pm daily. We're here when you're hungry."
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
              title="Delivery Available"
              description="Order through GrubHub, Postmates, or DoorDash."
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8" />}
              title="South St. Louis"
              description="3354 S. Jefferson Ave. Easy parking available."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Check out our full menu with chicken dinners, fish platters, combos, and more.
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity text-lg px-10 py-6 rounded-xl shadow-glow">
              Explore Our Menu
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-shadow duration-300">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
