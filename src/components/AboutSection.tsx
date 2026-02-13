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
      // === Modern cybersecurity background ===
      background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(88, 101, 242, 0.08) 0%, transparent 30%),
        radial-gradient(circle at 90% 80%, rgba(88, 101, 242, 0.06) 0%, transparent 30%),
        linear-gradient(rgba(88, 101, 242, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(88, 101, 242, 0.04) 1px, transparent 1px)
      `,
      backgroundSize: "200% 200%, 200% 200%, 60px 60px, 60px 60px",
      backgroundPosition: "center",
    }}
  >
    {/* Dark semi-transparent overlay for readability */}
    <div
      className="absolute inset-0"
      style={{
        background: "rgba(13, 17, 23, 0.65)",
        backdropFilter: "blur(2px)",
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 tracking-tight drop-shadow-lg">
        About Us
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-gray-700/40 bg-gray-900/85 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col overflow-hidden"
          >
            <CardHeader className="items-center text-center pb-2">
              <div className="w-16 h-16 rounded-xl bg-blue-950/50 flex items-center justify-center mb-4 border border-blue-500/30">
                <c.icon className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-white">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-gray-300 text-base leading-relaxed flex-1 flex flex-col px-6 pb-8">
              {c.text && <p className="mb-6">{c.text}</p>}

              {c.items && (
                <ul className="space-y-4 flex-1">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500" />
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