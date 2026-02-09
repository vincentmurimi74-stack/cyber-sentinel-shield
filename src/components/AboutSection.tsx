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
      // Solid light background for the whole section
      background: "#f8fafc", // very light gray / off-white – clean & professional
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
            className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            style={{
              // Solid light background for each card (slightly brighter than section)
              background: "#ffffff",
            }}
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