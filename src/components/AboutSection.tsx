import { Eye, Target, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      // === RICH GOLD GRADIENT FOR THE WHOLE SECTION ===
      background: "linear-gradient(135deg, #2c1b0f 0%, #4a2c15 40%, #8b6f47 70%, #d4af37 100%)",
    }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-50 mb-4 tracking-tight drop-shadow-md">
        About Us
      </h2>
      <p className="text-center text-amber-100/90 max-w-3xl mx-auto mb-12 text-lg">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border-none shadow-xl hover:shadow-2xl transition-all duration-400 flex flex-col relative overflow-hidden backdrop-blur-sm"
            style={{
              // === SUBTLE GOLD GRADIENT FOR CARDS (semi-transparent) ===
              background: "linear-gradient(135deg, rgba(139,111,71,0.45) 0%, rgba(212,175,55,0.35) 50%, rgba(139,111,71,0.45) 100%)",
              border: "1px solid rgba(212,175,55,0.5)",
            }}
          >
            {/* Subtle inner gold glow for premium effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.18) 0%, transparent 70%)",
              }}
            />

            <CardHeader className="items-center text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-amber-500/15 flex items-center justify-center mb-3 border border-amber-500/40">
                <c.icon className="w-7 h-7 text-amber-400" />
              </div>
              <CardTitle className="text-xl text-amber-50">{c.title}</CardTitle>
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