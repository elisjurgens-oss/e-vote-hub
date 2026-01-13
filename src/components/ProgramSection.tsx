import { useState } from "react";

const days = [
  {
    date: "October 15",
    label: "Day 1",
    events: [
      { time: "08:30", title: "Registration & Coffee", type: "break" },
      { time: "09:00", title: "Opening Ceremony", type: "keynote" },
      { time: "09:30", title: "Keynote: The Future of E-Voting", speaker: "Prof. Elena Schmidt", type: "keynote" },
      { time: "10:30", title: "Coffee Break", type: "break" },
      { time: "11:00", title: "Session 1: Cryptographic Protocols", type: "session" },
      { time: "12:30", title: "Lunch", type: "break" },
      { time: "14:00", title: "Session 2: Privacy & Authentication", type: "session" },
      { time: "15:30", title: "Coffee Break", type: "break" },
      { time: "16:00", title: "Session 3: Blockchain Applications", type: "session" },
      { time: "18:00", title: "Welcome Reception", type: "social" },
    ],
  },
  {
    date: "October 16",
    label: "Day 2",
    events: [
      { time: "09:00", title: "Keynote: Verifiable Elections at Scale", speaker: "Dr. Marcus Chen", type: "keynote" },
      { time: "10:00", title: "Coffee Break", type: "break" },
      { time: "10:30", title: "Session 4: Usability Studies", type: "session" },
      { time: "12:00", title: "Lunch", type: "break" },
      { time: "13:30", title: "Panel: Post-Quantum Voting", type: "keynote" },
      { time: "15:00", title: "Coffee Break", type: "break" },
      { time: "15:30", title: "Session 5: Legal Frameworks", type: "session" },
      { time: "17:00", title: "Poster Session", type: "session" },
      { time: "19:00", title: "Conference Dinner", type: "social" },
    ],
  },
  {
    date: "October 17",
    label: "Day 3",
    events: [
      { time: "09:00", title: "Session 6: Real-World Deployments", type: "session" },
      { time: "10:30", title: "Coffee Break", type: "break" },
      { time: "11:00", title: "Session 7: Emerging Technologies", type: "session" },
      { time: "12:30", title: "Closing Ceremony & Best Paper Awards", type: "keynote" },
      { time: "13:30", title: "Farewell Lunch", type: "break" },
    ],
  },
];

const typeColors: Record<string, string> = {
  keynote: "border-l-accent bg-accent/5",
  session: "border-l-primary",
  break: "border-l-muted-foreground/30",
  social: "border-l-accent/60 bg-accent/5",
};

export const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="program" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Program
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conference Schedule
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three days of inspiring talks, presentations, and networking opportunities 
            with leading experts in electronic voting.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {days.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeDay === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="block">{day.label}</span>
              <span className="text-xs opacity-70">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="divide-y divide-border">
            {days[activeDay].events.map((event, index) => (
              <div
                key={index}
                className={`flex gap-6 p-6 border-l-4 ${typeColors[event.type]}`}
              >
                <div className="w-16 flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    {event.time}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{event.title}</h4>
                  {event.speaker && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.speaker}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
