const generalChairs = [
  { name: "Prof. Elena Schmidt", affiliation: "TU Vienna" },
  { name: "Dr. Marcus Chen", affiliation: "MIT" },
];

const programChairs = [
  { name: "Prof. Sarah Williams", affiliation: "ETH Zurich" },
  { name: "Dr. Kenji Tanaka", affiliation: "University of Tokyo" },
];

const programCommittee = [
  { name: "Dr. Anna Kovacs", affiliation: "ELTE Budapest" },
  { name: "Prof. Michael Brown", affiliation: "Stanford University" },
  { name: "Dr. Sophie Laurent", affiliation: "INRIA Paris" },
  { name: "Prof. Hans Mueller", affiliation: "University of Zurich" },
  { name: "Dr. Lisa Anderson", affiliation: "Cambridge University" },
  { name: "Prof. Roberto Rossi", affiliation: "Politecnico di Milano" },
  { name: "Dr. Jennifer Park", affiliation: "KAIST" },
  { name: "Prof. David Martinez", affiliation: "UC Berkeley" },
];

export const ProgramCommitteesSection = () => {
  return (
    <section id="program-committees" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Program Committees
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Experts
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our distinguished committee brings together leading researchers and practitioners 
            from around the world in electronic voting, cryptography, and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General Chairs */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
              General Chairs
            </h3>
            <div className="space-y-4">
              {generalChairs.map((chair) => (
                <div key={chair.name}>
                  <p className="font-medium text-foreground">{chair.name}</p>
                  <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Chairs */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
              Program Chairs
            </h3>
            <div className="space-y-4">
              {programChairs.map((chair) => (
                <div key={chair.name}>
                  <p className="font-medium text-foreground">{chair.name}</p>
                  <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Committee */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
            Program Committee
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCommittee.map((member) => (
              <div key={member.name}>
                <p className="font-medium text-foreground text-sm">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
