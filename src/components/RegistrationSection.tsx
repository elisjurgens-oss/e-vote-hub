import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const registrationTypes = [
  {
    title: "Early Bird",
    price: "€350",
    deadline: "Until July 31",
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Coffee breaks & lunches",
      "Conference dinner",
    ],
    highlight: true,
  },
  {
    title: "Regular",
    price: "€450",
    deadline: "August 1 - October 1",
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Coffee breaks & lunches",
      "Conference dinner",
    ],
    highlight: false,
  },
  {
    title: "Student",
    price: "€200",
    deadline: "Valid student ID required",
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Coffee breaks & lunches",
    ],
    highlight: false,
  },
];

export const RegistrationSection = () => {
  return (
    <section id="registration" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Registration
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Secure Your Spot
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Register early to take advantage of our early bird pricing. 
            All registrations include access to all sessions and conference materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {registrationTypes.map((type) => (
            <div
              key={type.title}
              className={`rounded-2xl p-8 relative ${
                type.highlight
                  ? "bg-primary text-primary-foreground ring-2 ring-accent"
                  : "bg-card border border-border"
              }`}
            >
              {type.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}

              <h3 className={`font-display text-xl font-semibold mb-2 ${
                type.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {type.title}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${
                  type.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {type.price}
                </span>
              </div>
              
              <p className={`text-sm mb-6 ${
                type.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {type.deadline}
              </p>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      type.highlight ? "text-accent" : "text-accent"
                    }`} />
                    <span className={`text-sm ${
                      type.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  type.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
