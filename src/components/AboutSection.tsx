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
      // Light, subtle cybersecurity pattern background
      backgroundColor: "#f9fafb", // very light neutral base
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
        radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.025) 0%, transparent 15%),
        radial-gradient(circle at 85% 75%, rgba(59, 130, 246, 0.025) 0%, transparent 15%)
      `,
      backgroundSize: "60px 60px, 60px 60px, 100% 100%, 100% 100%",
      backgroundPosition: "center",
    }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        About Us
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col bg-white/95 backdrop-blur-[2px]"
          >
            <CardHeader className="items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <c.icon className="w-7 h-7 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">{c.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-gray-700 text-sm leading-relaxed flex-1 flex flex-col">
              {c.text && <p className="mb-4">{c.text}</p>}
              {c.items && (
                <ul className="space-y-3 list-disc list-inside flex-1">
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