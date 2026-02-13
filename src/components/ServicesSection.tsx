import { Search, MessageSquare, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    points: [
      "Conducting deep reconnaissance to uncover hidden vulnerabilities within IT infrastructures.",
      "Executing simulated attacks that mimic real-world adversaries, exposing system weaknesses.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Security Consulting",
    points: [
      "Crafting tactical recommendations to bolster cybersecurity defenses.",
      "Assisting in the deployment of fortified security strategies and solutions.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Defense Mechanisms",
    points: [
      "Maintaining a vigilant watch against malicious incursions with continuous monitoring and rapid countermeasures.",
      "Deploying advanced defense technologies to detect and repel cyber threats with surgical accuracy.",
    ],
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="relative py-20 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, hsl(205 39% 30%) 0%, hsl(224 35% 14%) 50%, hsl(205 39% 25%) 100%)",
    }}
  >
    {/* Subtle cyber grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(205 55% 62%) 1px, transparent 1px), linear-gradient(90deg, hsl(205 55% 62%) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Our Services
      </h2>
      <p className="text-center text-blue-200/80 max-w-2xl mx-auto mb-12">
        Comprehensive cybersecurity solutions tailored to your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Card
            key={s.title}
            className="border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/10 hover:scale-[1.02] flex flex-col"
          >
            <CardHeader className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 mx-auto"
                style={{
                  backgroundColor: "hsl(43 85% 58% / 0.15)",
                  boxShadow: "0 0 0 1px hsl(43 85% 58% / 0.25)",
                }}
              >
                <s.icon className="w-7 h-7" style={{ color: "hsl(43 85% 58%)" }} />
              </div>
              <CardTitle className="text-xl text-white">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col text-left">
              <ul className="space-y-3 text-blue-100/80 text-sm leading-relaxed flex-1">
                {s.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: "hsl(43 85% 58%)" }} className="mt-1">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 font-medium text-sm transition-colors inline-block"
                style={{ color: "hsl(43 85% 58%)" }}
              >
                Learn More →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
