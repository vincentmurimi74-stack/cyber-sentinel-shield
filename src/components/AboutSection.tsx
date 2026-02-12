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
    items: ["Discretion:", "Excellence: ", "Effectiveness: "],
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative py-20 overflow-hidden theme-light bg-background text-foreground"
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/80" />
      <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 right-[-10%] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.14) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.12) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          backgroundPosition: "center",
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        About Us
      </h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
        Specializing in sophisticated penetration testing, strategic defense
        recommendations, and comprehensive protective measures.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border border-border/70 bg-card/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <CardHeader className="items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 ring-1 ring-accent/25 flex items-center justify-center mb-3">
                <c.icon className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="text-xl text-foreground">
                {c.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm leading-relaxed flex-1 flex flex-col">
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
