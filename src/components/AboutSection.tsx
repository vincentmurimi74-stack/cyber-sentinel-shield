import { Eye, Target, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cyber2 from "@/assets/cyber2.jpg";

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
      { label: "Discretion", desc: "Every mission is conducted with the utmost confidentiality and precision." },
      { label: "Excellence", desc: "Our commitment to unparalleled quality ensures our clients' defenses remain unbreachable." },
      { label: "Effectiveness", desc: "We deliver targeted solutions that are both efficient and devastatingly effective against cyber adversaries." },
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="relative py-20 overflow-hidden">
    {/* Background image with heavy light overlay for readability */}
    <div className="absolute inset-0">
      <img
        src={cyber2}
        alt=""
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/90 to-blue-50/92" />
    </div>

    {/* Subtle circuit-board grid pattern */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(205 39% 46%) 1px, transparent 1px), linear-gradient(90deg, hsl(205 39% 46%) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: "hsl(224 35% 14%)" }}>
        About Us
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed" style={{ color: "hsl(220 30% 25%)" }}>
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-white/95 backdrop-blur-sm"
          >
            <CardHeader className="items-center text-center pb-2">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 border"
                style={{
                  backgroundColor: "hsl(205 39% 94%)",
                  borderColor: "hsl(205 39% 85%)",
                }}
              >
                <c.icon className="w-8 h-8" style={{ color: "hsl(205 39% 36%)" }} />
              </div>
              <CardTitle className="text-2xl" style={{ color: "hsl(224 35% 14%)" }}>
                {c.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-base leading-relaxed flex-1 flex flex-col px-6 pb-8" style={{ color: "hsl(220 20% 30%)" }}>
              {c.text && <p>{c.text}</p>}

              {c.items && (
                <ul className="space-y-4 flex-1">
                  {c.items.map((item, i) => (
                    <li key={i}>
                      <span className="font-semibold" style={{ color: "hsl(43 70% 40%)" }}>
                        {item.label}:
                      </span>{" "}
                      {item.desc}
                    </li>
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
