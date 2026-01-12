import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { restaurantInfo } from "@/data/menuData";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-card py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Visit us in South St. Louis or give us a call to place your order.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      {restaurantInfo.address}
                      <br />
                      {restaurantInfo.city}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:314-680-0000"
                      className="text-primary hover:underline text-lg font-semibold"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      {restaurantInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="tel:314-680-0000" className="flex-1 min-w-[200px]">
                  <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity py-6 rounded-xl shadow-glow">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Order
                  </Button>
                </a>
                <a
                  href="https://maps.google.com/?q=3354+S+Jefferson+Ave+St+Louis+MO+63118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px]"
                >
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 py-6 rounded-xl">
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Order Delivery
              </h2>
              <p className="text-muted-foreground mb-6">
                We partner with popular delivery apps to bring our delicious food right to your door.
              </p>
              <div className="flex flex-wrap gap-3">
                {restaurantInfo.deliveryApps.map((app) => (
                  <span
                    key={app}
                    className="px-5 py-2.5 text-base font-medium bg-muted rounded-full text-foreground"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto lg:min-h-[500px]">
            <iframe
              title="Louisiana Fish, Chicken, Shrimp & Grill Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.8!2d-90.2140!3d38.5940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4f23c7e4f1d%3A0x5e8f5e8f5e8f5e8f!2s3354%20S%20Jefferson%20Ave%2C%20St.%20Louis%2C%20MO%2063118!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
