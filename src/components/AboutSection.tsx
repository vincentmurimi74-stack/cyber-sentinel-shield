import { Eye, Target, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cyber1 from "@/assets/cyber1.jpg";
import cyber3 from "@/assets/cyber3.jpg";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "Willburn & Stephenson Ltd. stands at the forefront of the battle against cyber threats, a bastion of elite cyber warriors committed to defending the digital realm. Our company is synonymous with unmatched excellence, unwavering discretion, and relentless effectiveness.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "In a world where cyber threats lurk in every shadow, our mission is clear: to hunt, neutralize, and eliminate digital adversaries with military precision. We protect our clients' digital strongholds, employing state-of-the-art technology and time-tested tactics.",
  },
  {
    icon: Shield,
    title: "Our Values",
    items: [
      "Discretion:",
      "Excellence: ",
      "Effectiveness: ",
    ],
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative py-20 overflow-hidden"
    style={{
      // === CYBERSECURITY GRADIENT BACKGROUND FOR THE WHOLE SECTION ===
      background: "linear-gradient(135deg, #0a0e17 0%, #0f172a 40%, #1e1b4b 100%)",
    }}
  >
    {/* Optional subtle cyber grid overlay (very light) */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 212, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.4) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    {/* Background images (kept but toned down) */}
    <div className="absolute inset-0">
      <img
        src={cyber1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
    </div>

    <div className="absolute inset-0 opacity-5">
      <img
        src={cyber3}
        alt=""
        className="w-full h-full object-cover mix-blend-overlay"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        About Us
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md flex flex-col relative overflow-hidden"
            style={{
              // === MATCHING DARK CYBER GRADIENT FOR CARDS ===
              background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(17,24,39,0.85) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.18)",
            }}
          >
            {/* Optional subtle inner glow/gradient overlay on cards */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 30% 20%, rgba(0,212,255,0.08) 0%, transparent 60%)",
              }}
            />

            <CardHeader className="items-center text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <c.icon className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="text-xl text-white">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-gray-300 text-sm leading-relaxed relative z-10 flex-1 flex flex-col">
              {c.text && <p className="mb-4">{c.text}</p>}
              {c.items && (
                <ul className="space-y-3 list-disc list-inside flex-1">
                  {c.items.map((item, i) => (
                    <li key={i} className="text-gray-200">{item}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;