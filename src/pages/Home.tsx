import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, MapPin, Clock, Truck } from "lucide-react";
import { restaurantInfo } from "@/data/menuData";
import heroImage from "/images/pictures/herosection.png";

// Use local wood texture background
const woodBg = "/images/pictures/wood-bg.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Two Column Layout */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${woodBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center min-h-[90vh]">
          {/* Left: Content with no background panel */}
          <div className="w-full md:w-1/2 max-w-2xl text-left md:pr-12 px-8 py-12 md:py-16 md:pl-12 md:pr-8 relative z-10">
            <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-orange-400 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Louisiana
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Fish, Chicken, Shrimp & Grill
            </div>
            {/* Removed 'Louisiana-Style Fried Chicken & Seafood' heading as requested */}
            <div className="text-xl text-yellow-300 font-semibold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Crispy. Juicy. Always Fresh.</div>
            <p className="text-lg text-white mb-6 max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Proudly serving St. Louis with crispy fried chicken, whole wings, golden fish, shrimp, and fresh seafood — seasoned the Louisiana way, cooked fresh daily, and served hot every time.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6 text-yellow-300 font-medium text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <span className="flex items-center"><span className="text-2xl mr-1">★</span> 4.7 Google Rating</span>
              <span className="hidden sm:inline">•</span>
              <span>Family Owned</span>
              <span className="hidden sm:inline">•</span>
              <span>Serving St. Louis Since 2008</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="bg-[#ff8811] text-white text-lg px-8 py-6 rounded-xl shadow-glow border-none font-semibold focus:outline-none focus:ring-2 focus:ring-[#ff8811] focus:ring-opacity-50"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                >
                  View Menu
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:314-680-0000">
                <Button
                  size="lg"
                  className="bg-[#191714] text-[#ff8811] text-lg px-8 py-6 rounded-xl border border-[#ff8811] font-semibold focus:outline-none focus:ring-2 focus:ring-[#ff8811] focus:ring-opacity-50 !hover:bg-[#191714] !hover:text-[#ff8811] !hover:border-[#ff8811]"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                >
                  Order Now
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <span>Delivered via</span>
              {/* DoorDash SVG Icon */}
              <span className="flex items-center gap-1">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="16" rx="3" fill="#FF3008"/>
                  <path d="M6 8.5C6 7.11929 7.11929 6 8.5 6H19.5C20.8807 6 22 7.11929 22 8.5C22 9.88071 20.8807 11 19.5 11H8.5C7.11929 11 6 9.88071 6 8.5Z" fill="white"/>
                </svg>
                <span className="ml-1">DoorDash</span>
              </span>
              {/* Uber Eats SVG Icon */}
              <span className="flex items-center gap-1">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="16" rx="3" fill="#000"/>
                  <text x="4" y="12" fill="#7FFF00" fontSize="10" fontFamily="Arial" fontWeight="bold">Uber Eats</text>
                </svg>
                <span className="ml-1">Uber Eats</span>
              </span>
              {/* Grubhub SVG Icon */}
              <span className="flex items-center gap-1">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="16" rx="3" fill="#EA0027"/>
                  <text x="4" y="12" fill="white" fontSize="10" fontFamily="Arial" fontWeight="bold">Grubhub</text>
                </svg>
                <span className="ml-1">Grubhub</span>
              </span>
            </div>
          </div>
          {/* Right: Large Image - Responsive and Fully Visible */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
            <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
              <img
                src={heroImage}
                alt="Louisiana Fried Chicken and Fries"
                className="object-contain w-full h-auto max-h-[80vh] md:max-h-[90vh] lg:max-h-[100vh] rounded-2xl shadow-2xl"
                style={{ background: 'none', border: 'none' }}
              />
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
