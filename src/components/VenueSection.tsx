import { MapPin, Train, Plane, Building } from "lucide-react";

const hotels = [
  {
    name: "Hotel Imperial Vienna",
    distance: "500m from venue",
    price: "€220/night",
    note: "Conference discount available",
  },
  {
    name: "Grand Ferdinand",
    distance: "800m from venue",
    price: "€180/night",
    note: "Conference discount available",
  },
  {
    name: "Motel One Vienna",
    distance: "1.2km from venue",
    price: "€95/night",
    note: "Budget-friendly option",
  },
];

export const VenueSection = () => {
  return (
    <section id="venue" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Venue & Accommodation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vienna, Austria
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join us in the heart of Europe at the historic TU Vienna, one of the world's 
            leading technical universities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Venue Info */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">TU Vienna Main Building</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                TU Vienna - Main Building
              </h3>
              <p className="text-muted-foreground mb-6">
                Karlsplatz 13, 1040 Vienna, Austria
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">From Airport</p>
                    <p className="text-sm text-muted-foreground">
                      30 min via City Airport Train (CAT)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Public Transport</p>
                    <p className="text-sm text-muted-foreground">
                      U1/U4 Karlsplatz station (2 min walk)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Recommended Hotels
              </h3>
            </div>

            {hotels.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-foreground">{hotel.name}</h4>
                  <span className="text-sm font-semibold text-accent">
                    {hotel.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {hotel.distance}
                </p>
                <p className="text-xs text-accent">{hotel.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
