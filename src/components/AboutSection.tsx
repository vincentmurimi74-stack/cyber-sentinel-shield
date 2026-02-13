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
    className="relative py-20"
    style={{
      // Light, attractive cybersecurity-inspired gradient background
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)",
    }}
  >
    {/* Very subtle light grid pattern – barely noticeable but adds tech feel */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-6">
        About Us
      </h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
          >
            <CardHeader className="items-center text-center pb-2">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                <c.icon className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-slate-800">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-slate-600 text-base leading-relaxed flex-1 flex flex-col px-6 pb-8">
              {c.text && <p className="mb-6">{c.text}</p>}

              {c.items && (
                <ul className="space-y-4 flex-1">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span>{item}</span>
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