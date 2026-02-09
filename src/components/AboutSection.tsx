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
      "Discretion: Every mission is conducted with the utmost confidentiality and precision.",
      "Excellence: Our commitment to unparalleled quality ensures our clients' defenses remain unbreachable.",
      "Effectiveness: We deliver targeted solutions that are both efficient and devastatingly effective against cyber adversaries.",
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">About Us</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Specializing in sophisticated penetration testing, strategic defense recommendations, and comprehensive protective measures.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card key={c.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
            <CardHeader className="items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <c.icon className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="text-xl">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {c.text && <p>{c.text}</p>}
              {c.items && (
                <ul className="space-y-3 list-disc list-inside">
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
