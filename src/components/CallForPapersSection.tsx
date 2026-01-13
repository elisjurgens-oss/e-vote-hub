import { FileText, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const topics = [
  "Cryptographic Voting Protocols",
  "Voter Authentication & Privacy",
  "Blockchain-Based Voting",
  "Usability & Accessibility",
  "Verifiable Elections",
  "Post-Quantum Security",
  "Legal & Regulatory Frameworks",
  "Real-World Deployments",
];

const deadlines = [
  { label: "Paper Submission", date: "June 15, 2026" },
  { label: "Notification", date: "August 1, 2026" },
  { label: "Camera Ready", date: "September 1, 2026" },
];

export const CallForPapersSection = () => {
  return (
    <section id="call-for-papers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Call For Papers
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Share Your Research
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We invite submissions of original research papers on all aspects of electronic voting. 
            Papers will be peer-reviewed and published in the conference proceedings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Topics */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Topics of Interest
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Important Dates
              </h3>
            </div>
            <div className="space-y-4">
              {deadlines.map((deadline, index) => (
                <div
                  key={deadline.label}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {deadline.label}
                  </span>
                  <span className="font-medium text-foreground">
                    {deadline.date}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              All deadlines are 23:59 AoE (Anywhere on Earth)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
          >
            Submit Your Paper
          </Button>
        </div>
      </div>
    </section>
  );
};
