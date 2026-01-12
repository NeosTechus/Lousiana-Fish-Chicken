import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { restaurantInfo } from "@/data/menuData";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-gradient-gold">
                Louisiana
              </h3>
              <p className="font-display text-base text-foreground">Fish, Chicken, Shrimp & Grill</p>
            </div>
            <p className="text-muted-foreground text-sm">
              {restaurantInfo.tagline}
            </p>
            <p className="text-muted-foreground text-sm">
              Serving the best fried chicken & fish in St. Louis since 2008.
              All food made fresh daily.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=3354+S+Jefferson+Ave+St+Louis+MO+63118"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {restaurantInfo.address}
                  <br />
                  {restaurantInfo.city}
                </span>
              </a>
              <a
                href="tel:314-680-0000"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Delivery */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="pt-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Truck className="w-5 h-5" />
                <span className="font-medium">Order Delivery</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {restaurantInfo.deliveryApps.map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Louisiana Fish & Chicken. All rights reserved.</p>
        </div>

        <div className="mt-2 text-center text-muted-foreground text-sm">
          <p>
            Proud Client of{" "}
            <a
              href="https://neostechus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Neos Tech LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
