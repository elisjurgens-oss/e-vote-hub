# WordPress Export Guide

This guide helps you recreate the E-Vote 2026 conference site in WordPress.

## Recommended WordPress Setup

### Theme Recommendations
- **Astra** (free, lightweight, works with page builders)
- **Flavor** (minimal, conference-ready)
- **Developer Conference** (event-focused)

### Page Builder Recommendations
- **Elementor** (most popular, easiest)
- **Divi** (powerful, visual)
- **Gutenberg** (built-in, improving)

---

## Color Palette

Use these colors in your WordPress theme customizer or page builder:

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Primary (Navy) | `#1e293b` | `222 47% 17%` | Headers, primary backgrounds |
| Primary Foreground | `#f8fafc` | `210 40% 98%` | Text on primary |
| Accent (Teal) | `#14b8a6` | `173 80% 40%` | Buttons, highlights |
| Accent Hover | `#0d9488` | `173 80% 32%` | Button hover states |
| Background | `#ffffff` | `0 0% 100%` | Page background |
| Foreground | `#0f172a` | `222 47% 11%` | Body text |
| Muted | `#f1f5f9` | `210 40% 96%` | Section backgrounds |
| Muted Foreground | `#64748b` | `215 16% 47%` | Secondary text |
| Border | `#e2e8f0` | `214 32% 91%` | Dividers, borders |

---

## Typography

### Fonts (Google Fonts - free)
- **Headings**: Space Grotesk (weights: 500, 600, 700)
- **Body**: Inter (weights: 400, 500, 600)

### WordPress Setup
Add to your theme's `functions.php` or use a plugin like "Easy Google Fonts":

```php
function evote_fonts() {
    wp_enqueue_style('google-fonts', 
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap', 
        array(), 
        null
    );
}
add_action('wp_enqueue_scripts', 'evote_fonts');
```

### Font Sizes
- H1: 3.75rem (60px) - Hero title
- H2: 2.25rem (36px) - Section titles  
- H3: 1.5rem (24px) - Subsection titles
- Body: 1rem (16px)
- Small: 0.875rem (14px)

---

## Page Sections

### 1. Navigation
**Structure:**
- Fixed header with logo left, menu items right
- Separator: `····` between menu items
- Transparent on hero, white background when scrolled

**Menu Items:**
1. Call For Papers
2. Program Committees
3. Program
4. Venue & Accommodation
5. Registration

**CSS for separator (add to Additional CSS):**
```css
.menu-separator {
    color: rgba(255,255,255,0.3);
    margin: 0 12px;
}
.scrolled .menu-separator {
    color: rgba(100,116,139,0.5);
}
```

---

### 2. Hero Section
**Layout:** Full-width, centered content

**Content:**
- Badge: "International Conference on E-Voting"
- Title: "E-Voting 2026"
- Subtitle: "Shaping the Future of Democratic Technology"
- Date: October 15-17, 2026
- Location: Vienna, Austria
- Buttons: "Register Now" (primary), "Submit Paper" (outline)

**Background:** Gradient from navy to slate
```css
.hero-section {
    background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f8fafc;
}
```

---

### 3. Call For Papers Section
**Layout:** Two columns (65% / 35%)

**Left Column - Topics:**
- E-Voting Security & Cryptography
- Voter Privacy & Anonymity
- Blockchain-based Voting Systems
- Accessibility in E-Voting
- Legal & Regulatory Frameworks
- Post-Quantum Cryptography in Voting
- Usability Studies & Human Factors
- Remote & Internet Voting

**Right Column - Deadlines:**
| Milestone | Date |
|-----------|------|
| Paper Submission | June 1, 2026 |
| Notification | July 15, 2026 |
| Camera Ready | August 15, 2026 |
| Conference | October 15-17, 2026 |

**CTA Button:** "Submit Your Paper"

---

### 4. Program Committees Section
**Layout:** Three subsections

**General Chairs:**
- Dr. Maria Schmidt - TU Vienna, Austria
- Prof. Hans Mueller - ETH Zürich, Switzerland

**Program Chairs:**
- Dr. Anna Kowalski - Warsaw University, Poland
- Prof. Jean-Pierre Dubois - INRIA, France
- Dr. Sarah Chen - MIT, USA

**Program Committee:** (Grid of names with affiliations)
- Prof. Roberto Rossi - University of Rome, Italy
- Dr. Yuki Tanaka - Tokyo University, Japan
- Prof. Michael Brown - Oxford University, UK
- Dr. Elena Popov - Moscow State University, Russia
- Prof. Carlos Garcia - UNAM, Mexico
- Dr. Linda Okonkwo - University of Lagos, Nigeria
- Prof. Kim Soo-min - KAIST, South Korea
- Dr. François Martin - Sorbonne, France

---

### 5. Program Section
**Layout:** Tabbed interface with 3 days

**Day 1 - October 15:**
| Time | Event | Type |
|------|-------|------|
| 09:00 - 09:30 | Opening Ceremony | Keynote |
| 09:30 - 10:30 | Keynote: Future of Democracy | Keynote |
| 10:30 - 11:00 | Coffee Break | Break |
| 11:00 - 12:30 | Session: Cryptographic Protocols | Session |
| 12:30 - 14:00 | Lunch | Break |
| 14:00 - 15:30 | Session: Blockchain Voting | Session |
| 15:30 - 16:00 | Coffee Break | Break |
| 16:00 - 17:30 | Session: Security Analysis | Session |
| 19:00 - 22:00 | Welcome Reception | Social |

**Day 2 - October 16:**
| Time | Event | Type |
|------|-------|------|
| 09:00 - 10:00 | Keynote: Privacy in Digital Voting | Keynote |
| 10:00 - 10:30 | Coffee Break | Break |
| 10:30 - 12:00 | Session: Usability Studies | Session |
| 12:00 - 13:30 | Lunch | Break |
| 13:30 - 15:00 | Session: Legal Frameworks | Session |
| 15:00 - 15:30 | Coffee Break | Break |
| 15:30 - 17:00 | Panel Discussion | Session |
| 19:00 - 23:00 | Conference Dinner | Social |

**Day 3 - October 17:**
| Time | Event | Type |
|------|-------|------|
| 09:00 - 10:00 | Keynote: Post-Quantum Security | Keynote |
| 10:00 - 10:30 | Coffee Break | Break |
| 10:30 - 12:00 | Session: Accessibility | Session |
| 12:00 - 13:00 | Closing Ceremony & Awards | Keynote |

**Event Type Colors:**
- Keynote: Teal accent (#14b8a6)
- Session: Blue (#3b82f6)
- Break: Gray (#6b7280)
- Social: Purple (#8b5cf6)

---

### 6. Venue & Accommodation Section
**Layout:** Two columns

**Left Column - Venue:**
- **Location:** TU Vienna, Karlsplatz 13, 1040 Vienna, Austria
- **From Airport:** City Airport Train (CAT) to Wien Mitte, then U4 to Karlsplatz (35 min)
- **Public Transport:** U1, U2, U4 to Karlsplatz

**Right Column - Hotels:**
| Hotel | Distance | Price | Note |
|-------|----------|-------|------|
| Hotel Erzherzog Rainer | 200m | €120/night | Conference Rate |
| Motel One Wien-Staatsoper | 400m | €90/night | Budget-friendly |
| The Ritz-Carlton Vienna | 500m | €350/night | - |
| Hotel Sacher Wien | 600m | €450/night | Historic |

---

### 7. Registration Section
**Layout:** Centered form with card styling

**Form Fields:**
1. Full Name (required, text)
2. Email Address (required, email)
3. Institution/Organization/University (required, text)

**Button:** "Complete Registration" (full-width, teal)

**WordPress Form Setup:**
Use Contact Form 7 or WPForms with this structure:
```
[text* your-name placeholder "Enter your full name"]
[email* your-email placeholder "Enter your email address"]
[text* institution placeholder "University, company, or organization"]
[submit "Complete Registration"]
```

---

### 8. Footer
**Layout:** 4 columns + bottom bar

**Column 1 - Brand:**
- Logo: "E-Vote 2026"
- Description: "International Conference on E-Voting, bringing together researchers..."
- Social Icons: Twitter, LinkedIn, Email

**Column 2 - Quick Links:**
- Call For Papers
- Committees
- Program
- Registration

**Column 3 - Contact:**
- Email: info@evote2026.org
- Address: TU Vienna, Karlsplatz 13, 1040 Vienna, Austria

**Column 4:** (Optional - Sponsors)

**Bottom Bar:**
- Copyright: © 2026 E-Vote Conference
- Links: Privacy Policy, Terms of Service

---

## Custom CSS for WordPress

Add this to **Appearance → Customize → Additional CSS**:

```css
/* Typography */
body {
    font-family: 'Inter', sans-serif;
    color: #0f172a;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
}

/* Primary Button */
.btn-primary {
    background-color: #14b8a6;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #0d9488;
}

/* Outline Button */
.btn-outline {
    background: transparent;
    border: 2px solid white;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
}

.btn-outline:hover {
    background: rgba(255,255,255,0.1);
}

/* Section Styling */
.section-light {
    background-color: #ffffff;
    padding: 80px 0;
}

.section-muted {
    background-color: #f1f5f9;
    padding: 80px 0;
}

/* Card Styling */
.card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border: 1px solid #e2e8f0;
}

/* Badge */
.badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(20, 184, 166, 0.1);
    color: #14b8a6;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 500;
}

/* Form Styling */
.registration-form input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 16px;
}

.registration-form input:focus {
    outline: none;
    border-color: #14b8a6;
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}
```

---

## Elementor Setup Tips

1. **Global Colors:** Set up the color palette in Elementor → Settings → Global Colors
2. **Global Fonts:** Add Inter and Space Grotesk in Global Fonts
3. **Templates:** Create section templates for reuse
4. **Responsive:** Test at 1024px (tablet) and 768px (mobile) breakpoints

---

## Recommended Plugins

1. **Elementor** - Page builder
2. **Contact Form 7** or **WPForms** - Registration form
3. **Easy Google Fonts** - Typography
4. **WP Rocket** - Performance (optional)
5. **Yoast SEO** - SEO optimization

---

## Assets to Export

All icons used are from Lucide Icons (lucide.dev) - free and open source:
- Calendar
- MapPin
- Clock
- FileText
- Check
- ArrowRight
- Send
- Building2
- Train
- Hotel
- Twitter
- LinkedIn
- Mail

You can use these in WordPress with the "Flavor Icons" plugin or download SVGs from lucide.dev.
