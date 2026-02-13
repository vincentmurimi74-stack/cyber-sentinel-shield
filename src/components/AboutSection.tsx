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
      "Discretion",
      "Excellence",
      "Effectiveness",
    ],
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative py-20"
    style={{
      background: "linear-gradient(135deg, #fdfaf3 0%, #fcf8f0 50%, #f9f5e9 100%)",
    }}
  >
    {/* Subtle light gold pattern overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.07]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(189, 158, 90, 0.06) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(189, 158, 90, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Subtle noise/grain overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-6">
        About Us
      </h2>
      <p className="text-center text-slate-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-white/95 backdrop-blur-[2px]"
          >
            <CardHeader className="items-center text-center pb-2">
              <div className="w-16 h-16 rounded-xl bg-amber-50 flex items-center justify-center mb-4 border border-amber-100">
                <c.icon className="w-8 h-8 text-amber-700" />
              </div>
              <CardTitle className="text-2xl text-slate-800">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-slate-700 text-base leading-relaxed flex-1 flex flex-col px-6 pb-8">
              {c.text && <p className="mb-6">{c.text}</p>}

              {c.items && (
                <div className="space-y-3 flex-1">
                  {c.items.map((item, i) => (
                    <div key={i}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;