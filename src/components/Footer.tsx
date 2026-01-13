import { Mail, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              E-Vote 2026
            </h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              The International Conference on Electronic Voting, bringing together 
              researchers, practitioners, and policymakers to advance secure and 
              accessible democratic processes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#call-for-papers" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Call For Papers
                </a>
              </li>
              <li>
                <a href="#program-committees" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Committees
                </a>
              </li>
              <li>
                <a href="#program" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#registration" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>contact@evote2026.org</li>
              <li>TU Vienna</li>
              <li>Karlsplatz 13</li>
              <li>1040 Vienna, Austria</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 E-Vote Conference. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
