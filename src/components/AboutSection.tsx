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
      // === GOLD GRADIENT BACKGROUND FOR THE WHOLE SECTION ===
      background: "linear-gradient(135deg, #1a120b 0%, #3c2f2f 40%, #8b6f47 70%, #d4af37 100%)",
    }}
  >
    {/* Very subtle gold grid overlay (cyber-luxury feel) */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Background images (toned down significantly so gold gradient dominates) */}
    <div className="absolute inset-0 opacity-20">
      <img
        src={cyber1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90" />
    </div>

    <div className="absolute inset-0 opacity-8">
      <img
        src={cyber3}
        alt=""
        className="w-full h-full object-cover mix-blend-overlay"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 tracking-tight">
        About Us
      </h2>
      <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12 text-lg">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border-none shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 backdrop-blur-lg flex flex-col relative overflow-hidden"
            style={{
              // === GOLD GRADIENT FOR EACH CARD ===
              background: "linear-gradient(135deg, rgba(139,111,71,0.35) 0%, rgba(212,175,55,0.25) 50%, rgba(139,111,71,0.35) 100%)",
              border: "1px solid rgba(212,175,55,0.4)",
            }}
          >
            {/* Subtle inner gold glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.12) 0%, transparent 70%)",
              }}
            />

            <CardHeader className="items-center text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-3 border border-amber-500/30">
                <c.icon className="w-7 h-7 text-amber-400" />
              </div>
              <CardTitle className="text-xl text-amber-100">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-amber-100/90 text-sm leading-relaxed relative z-10 flex-1 flex flex-col">
              {c.text && <p className="mb-4">{c.text}</p>}
              {c.items && (
                <ul className="space-y-3 list-disc list-inside flex-1 text-amber-50">
                  {c.items.map((item, i) => (
                    <li key={i}>{item}</li>
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